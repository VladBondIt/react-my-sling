import BaseService from "./baseService";


class ItemService extends BaseService {

    async createItem(item) {

        const res = await fetch(`${this._apiBaseServer}api/item/add`, {
            method: 'POST',
            headers: {
                'Authorization': `${this._auth}`
            },
            body: item
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item/add
            , received ${res.status}`);
        }


        return await res.json();
    }

    async getItems(typeId, brandId, page, limit = 3) {
        const typeQuery = typeId ? `&typeId=${typeId}` : ""
        const brandQuery = brandId ? `&brandId=${brandId}` : ""
        const pageQuery = `&page=${page}`
        const limitQuery = `&limit=${limit}`
        const res = await fetch(`${this._apiBaseServer}api/item?${typeQuery}${brandQuery}${pageQuery}${limitQuery}`);

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

export default new ItemService();


