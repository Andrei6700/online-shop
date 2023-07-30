const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require("./config");

const tankName = "NumeTanc";
const tankPrice = 100;

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

async function insertUser(connection, userData) {
  const sqlInsertUsers = "INSERT INTO users (name, email, tara, adresa, telefon, bmilitara, cantitate) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const result = await connection.query(sqlInsertUsers, Object.values(userData));
  return result.insertId;
}

async function insertTank(connection, tankName, tankPrice) {
  const sqlInsertTanks = "INSERT INTO tanks (name, price) VALUES (?, ?)";
  const result = await connection.query(sqlInsertTanks, [tankName, tankPrice]);
  return result.insertId;
}

async function insertCountry(connection, countryData) {
  const sqlInsertCountry = "INSERT INTO countries (tara, adresa) VALUES (?, ?)";
  const result = await connection.query(sqlInsertCountry, Object.values(countryData));
  return result.insertId;
}

async function insertOrder(connection, userId, tankId, quantity) {
  const sqlInsertOrders = "INSERT INTO orders (user_id, tank_id, quantity, order_date) VALUES (?, ?, ?, CURDATE())";
  const result = await connection.query(sqlInsertOrders, [userId, tankId, quantity]);
  return result.insertId;
}

app.post("/send", async (req, res) => {
  try {
    const { name, email, tara, adresa, telefon, bmilitara, cantitate } = req.body;

    const connection = await new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          resolve(connection);
        }
      });
    });

    connection.beginTransaction();

    const userData = { name, email, tara, adresa, telefon, bmilitara, cantitate };
    const userId = await insertUser(connection, userData);

    const tankId = await insertTank(connection, tankName, tankPrice);

    const countryData = { tara, adresa };
    await insertCountry(connection, countryData);

    await insertOrder(connection, userId, tankId, cantitate);

    await new Promise((resolve, reject) => {
      connection.commit((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

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

    await transporter.sendMail(mail);

    console.log("Email Sent!");
    res.send("Email Sent!");

    connection.release();
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred.");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
