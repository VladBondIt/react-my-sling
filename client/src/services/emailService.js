import BaseService from "./baseService";

class EmailService extends BaseService {

    async sendMail({ name, email, phone }) {

        const obj = {
            name,
            email,
            phone,
            time: new Date().toLocaleString("ru-Ru", this._dateOptions),
            ourEmail: this._managerEmail
        }

        console.log(obj)

        const res = await fetch(`${this._apiBaseServer}api/mail/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(obj)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/mail/ 
            , received ${res.status}`);
        }
    }

}

export default new EmailService();