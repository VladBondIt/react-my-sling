import jwtDecode from "jwt-decode";
import { HOST } from "../consts/consts";

class FetchService {
    _apiBase = 'https://my-json-server.typicode.com/VladBondIt/FakeDBjson/';
    _apiBaseServer = HOST;
    _auth = `Bearer ${localStorage.getItem('token')}`

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }


    async getCategoryes(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        const data = await res.json();
        return [...new Map(data.map(obj => [obj["category"], obj])).values()]
    }


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
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })

        return await res.json()
    }

    async getTypes() {
        const res = await fetch(`${this._apiBaseServer}api/type/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/type/, received ${res.status}`);
        }
        const data = await res.json();

        return data.map(({ id, name }) => ({ id, name }));
    }

    async getBrand() {
        const res = await fetch(`${this._apiBaseServer}api/brand/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/brand/, received ${res.status}`);
        }
        const data = await res.json();

        return data.map(({ id, name }) => ({ id, name }));
    }

    async createType(type) {

        const typeObj = {
            name: type
        }

        const res = await fetch(`${this._apiBaseServer}api/type/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(typeObj)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/type/ 
            , received ${res.status}`);
        }


        return await res.json();
    }

    async createBrand(brand) {

        const brandObj = {
            name: brand
        }

        const res = await fetch(`${this._apiBaseServer}api/brand/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(brandObj)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/brand/ 
            , received ${res.status}`);
        }


        return await res.json();
    }

    async createItem(item) {

        const res = await fetch(`${this._apiBaseServer}api/item/add`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: item
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item/add
            , received ${res.status}`);
        }


        return await res.json();
    }

    async getItems() {
        const res = await fetch(`${this._apiBaseServer}api/item`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getItem(id) {
        const res = await fetch(`${this._apiBaseServer}api/item/${id}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item/${id}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getInfo() {
        const res = await fetch(`${this._apiBaseServer}api/info`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/info` +
                `, received ${res.status}`);
        }

        return await res.json();
    }
}

export default new FetchService();
