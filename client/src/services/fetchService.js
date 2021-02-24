class FetchService {
    _apiBase = 'https://my-json-server.typicode.com/VladBondIt/FakeDBjson/';

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
}

export default new FetchService();
