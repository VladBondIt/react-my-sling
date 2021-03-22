const mailer = require('../nodemailer/nodemailer');

class MailerController {

    async sendPost(req, res) {
        const { name, email, phone, time, ourEmail } = req.body

        const message = {
            to: ourEmail,
            subject: "Обратный звонок",
            text: `Заказан обратный звонок
            
            Данные клиента:

            Имя: ${name}
            Почта: ${email}
            Телефон: ${phone}
            Время отправки: ${time}`
        }

        mailer(message)

        return res.send("Mail is posted")
    }

}

module.exports = new MailerController()