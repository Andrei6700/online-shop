const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: "",
    user: "",
    database: ""
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/send", (req, res) => {
  const { name, email, tara, adresa, telefon, bmilitara } = req.body;
  const sqlInsert = "INSERT INTO test (name, email, tara, adresa, telefon, bmilitara) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert, [name, email, tara, adresa, telefon, bmilitara], (error, result) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});


const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});