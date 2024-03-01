const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'manefbenghorbel@gmail.com',
        password: '3310'
    }
});

const mailOptions = {
    from: 'manefbenghorbel@gmail.com',
    to: 'nouhatrifi@gmail.com',
    subject: 'nodejs',
    text: '5dhit 0 fel checkpoint'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});