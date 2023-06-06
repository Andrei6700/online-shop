const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require("./config");

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
  const { name, email, tara, adresa, telefon, bmilitara } = req.body;
  const sqlInsert =
    "INSERT INTO test (name, email, tara, adresa, telefon, bmilitara) VALUES (?, ?, ?, ?, ?, ?)";

  const mail = {
    from: '"Test" <test@gmail.com>',
    to: "wodolac508@ratedane.com",
    subject: "Data from Form",
    text: `
        Name: ${name}
        Email: ${email}
        tara: ${tara}
        adresa: ${adresa}
        telefon: ${telefon}
        bmilitara: ${bmilitara}
    `,
  };

  db.query(
    sqlInsert,
    [name, email, tara, adresa, telefon, bmilitara],
    (error, result) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        console.log(result);
        res.sendStatus(200);
      }
    }
  );

  transporter.sendMail(mail, (error, data) => {
    if (error) {
      console.error("Error occurred while sending email:", error);
      res.status(500).send("Error occurred while sending email");
    } else {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(data));

      res.send("Email Sent!");
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
