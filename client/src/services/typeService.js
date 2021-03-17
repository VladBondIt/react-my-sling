import BaseService from "./baseService";

class TypeService extends BaseService {
    async getTypes() {
        const res = await fetch(`${this._apiBaseServer}api/type/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/type/, received ${res.status}`);
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

}

export default new TypeService();