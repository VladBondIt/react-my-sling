import BaseService from "./baseService";

class BasketService extends BaseService {

    async addBasketItem(id, basketId) {
        const itemObj = {
            basketId: basketId,
            itemId: id,
        }

        const res = await fetch(`${this._apiBaseServer}api/basket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(itemObj)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/basket` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    async getBasket(id) {


        const res = await fetch(`${this._apiBaseServer}api/basket/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${this._auth}`
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/basket/${id}` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    async getUserBasketItems(id) {

        const res = await fetch(`${this._apiBaseServer}api/basket/items/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${this._auth}`
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/basket/items/${id}` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    async cancelBasketItem(id, basketId) {
        const itemObj = {
            basketId: basketId,
            itemId: id,
        }

        const res = await fetch(`${this._apiBaseServer}api/basket/cancel`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(itemObj)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/basket/cancel` +
                `, received ${res.status}`);
        }

        return await res.json();
    }


}

export default new BasketService();