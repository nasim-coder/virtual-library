const nodemailer = require('nodemailer');
const emailCredential = require('../emailConfig.json')

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: emailCredential.username,
        pass: emailCredential.password
    }
});

let mailOptions = {
    from: '',
    to: '',
    subject: 'Test',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});
