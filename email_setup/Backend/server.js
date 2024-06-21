
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/sendEmail', async (req, res) => {
    const { email, subject, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER_ID,
                pass: process.env.SMTP_USER_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', mailOptions });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(501).json({ message: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
