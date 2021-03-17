import BaseService from "./baseService";
import jwtDecode from "jwt-decode";


class LoginService extends BaseService {

    async registration(name, phone, email, password) {
        const user = {
            name,
            phone,
            email,
            password,
        }
        const res = await fetch(`${this._apiBaseServer}api/user/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/user/registration 
            , received ${res.status}`);
        }

        const data = await res.json();

        localStorage.setItem("token", data.token)

        return jwtDecode(data.token)
    }

    async login(email, password) {
        const user = {
            email,
            password,
        }
        const res = await fetch(`${this._apiBaseServer}api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/user/login 
            , received ${res.status}`);
        }

        const data = await res.json();

        localStorage.setItem("token", data.token)

        return jwtDecode(data.token)
    }

    async check() {
        const res = await fetch(`${this._apiBaseServer}api/user/auth`, {
            method: 'GET',
            headers: {
                'Authorization': `${this._auth}`
            },
        })

        return await res.json()
    }

}

export default new LoginService();