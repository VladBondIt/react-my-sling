import BaseService from "./baseService";

class BrandService extends BaseService {

    async getBrand() {
        const res = await fetch(`${this._apiBaseServer}api/brand/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/brand/, received ${res.status}`);
        }
        const data = await res.json();

        return data.map(({ id, name }) => ({ id, name }));
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

}

export default new BrandService();