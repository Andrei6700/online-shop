const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require("./config");
const tankDescription = "DescriereTanc"; // Înlocuiește "DescriereTanc" cu valoarea dorită pentru descrierea tancului
const tankName = "NumeTanc"; // Înlocuiește "NumeTanc" cu valoarea dorită pentru numele tancului
const tankPrice = 100; // Înlocuiește 100 cu valoarea dorită pentru prețul tancului

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "magazin_tancuri",
});

const transport = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
  const { name, email, tara, adresa, telefon, bmilitara, cantitate } = req.body;

  const sqlInsertUsers = "INSERT INTO users (name, email, tara, adresa, telefon, bmilitara, cantitate) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const sqlInsertTanks = "INSERT INTO tanks (name, description, price) VALUES (?, ?, ?)";
  const sqlInsertOrders = "INSERT INTO orders (user_id, tank_id, quantity, order_date) VALUES (?, ?, ?, CURDATE())";
  const sqlInsertCountry = "INSERT INTO countries (tara, adresa) VALUES (?, ?)";


  const mail = {
    from: '"Test" <test@gmail.com>',
    to: "wodolac508@ratedane.com",
    subject: "Data from Form",
    text: `
        Name: ${name}
        Email: ${email}
        Country: ${tara}
        Address: ${adresa}
        Phone: ${telefon}
        Bmilitara: ${bmilitara}
        Quantity: ${cantitate}
    `,
  };


  db.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    connection.beginTransaction((err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }

      connection.query(sqlInsertUsers, [name, email, tara, adresa, telefon, bmilitara, cantitate], (error, result) => {
        if (error) {
          console.log(error);
          connection.rollback(() => {
            res.sendStatus(500);
          });
          return;
        }

        const userID = result.insertId;

        connection.query(sqlInsertTanks, [tankName, tankDescription, tankPrice], (error, result) => {
          if (error) {
            console.log(error);
            connection.rollback(() => {
              res.sendStatus(500);
            });
            return;
          }

          connection.query(sqlInsertCountry, [tara, adresa], (error, result) => {
            if (error) {
              console.log(error);
              connection.rollback(() => {
                res.sendStatus(500);
              });
              return;
            }

            const tankID = result.insertId;

            connection.query(sqlInsertOrders, [userID, tankID, cantitate], (error, result) => {
              if (error) {
                console.log(error);
                connection.rollback(() => {
                  res.sendStatus(500);
                });
                return;
              }
              connection.commit((err) => {
                if (err) {
                  console.log(err);
                  connection.rollback(() => {
                    res.sendStatus(500);
                  });
                } else {
                  transporter.sendMail(mail, (error, data) => {
                    if (error) {
                      console.error("Error occurred while sending email:", error);
                      res.status(500).send("Error occurred while sending email");
                    } else {
                      console.log("Message sent: %s", data.messageId);
                      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(data));
                      res.send("Email Sent!");
                    }
                  });
                }
              });
            });
          });
        });
      });
    });
  });
});

  const port = 3000;

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
