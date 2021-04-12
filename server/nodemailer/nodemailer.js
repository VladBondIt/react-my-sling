const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, //true only for 465
    // Email login , pass
    auth: {
        user: "",
        pass: ""
    },
}, {
    from: "Mailer test <for_mailer18@mail.ru>"
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) { return console.log(err) }
        console.log("Email send: ", info)
    })
}

module.exports = mailer