import BaseService from "./baseService";

class ClientCartService extends BaseService {

    async getCartItems(arr) {
        arr = arr.map((value) => value.id)

        const formData = new FormData();

        formData.append('arr', JSON.stringify(arr))

        const res = await fetch(`${this._apiBaseServer}api/item/cart`, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item/cart` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

}

export default new ClientCartService();