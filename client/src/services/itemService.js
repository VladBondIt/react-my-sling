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

    async getItems(typeId, brandId, page, limit = 3, sortType, direction) {
        const typeQuery = typeId ? `&typeId=${typeId}` : ""
        const brandQuery = brandId ? `&brandId=${brandId}` : ""
        const pageQuery = `&page=${page}`
        const limitQuery = `&limit=${limit}`
        let sortTypeQuery = ''

        switch (sortType) {
            case "Цене":
                sortTypeQuery = '&type=price'
                break;
            case "Алфавиту":
                sortTypeQuery = '&type=name'
                break;

            default:
                break;
        }

        switch (direction) {
            case 'ASC':
                sortTypeQuery += '&sort=ASC'
                break;
            case 'DESC':
                sortTypeQuery += '&sort=DESC'

                break;

            default:
                break;
        }

        const res = await fetch(`${this._apiBaseServer}api/item?${typeQuery}${brandQuery}${pageQuery}${limitQuery}${sortTypeQuery}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/item` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getItem(id, userId) {
        const res = await fetch(`${this._apiBaseServer}api/item/${id}?userId=${userId}`);

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


