import BaseService from "./baseService";

class LimitService extends BaseService {

    async rewriteLimit(limit) {
        const obj = {
            limit: limit
        }

        const res = await fetch(`${this._apiBaseServer}api/limit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(obj)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/limit` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

}

export default new LimitService();