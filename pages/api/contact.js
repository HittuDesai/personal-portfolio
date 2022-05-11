import next from 'next';

export default function (req, res) {
    let nodemailer = require('nodemailer');
    require('dotenv').config();
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASS,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.MAIL,
        to: req.body.email,
        subject: `Re: ${req.body.subject} from ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
            if (err) {
                res.json(error);
                next();
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(info));
            }
            res.setHeader('Content-Type', 'application/json');
        })
}