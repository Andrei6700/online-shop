const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const config = require('./config');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.post('/', async (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
    const { name, email, tara, telefon, bmilitara, adresa } = req.body;
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            user: config.auth.user,
            pass: config.auth.pass
        }

    });

    const msg = {
        from: `Message From Contact Form `,
        to: `test@gmail.com`,
        subject: "Data",
        Text: ` 
            Name: ${name}
            Email: ${email}
            Tara: ${tara}
            Telefon: ${telefon}
            Bmilitara: ${bmilitara}
            Adresa: ${adresa}
                `
    };

    try {
        const info = await transporter.sendMail(msg);

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('Email Sent!');
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        res.status(500).send('Error occurred while sending email');
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
