const nodemailer = require('nodemailer');
const emailCredential = require('../emailConfig.json')
//creating transporter object
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

//options for email to send
let mailOptions = {
    from: '',
    to: '',
    subject: 'Test',
    text: 'Hello World!'
};

//sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});
