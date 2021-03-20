import BaseService from "./baseService";

class RatingService extends BaseService {
    async postRating(rating, userId, itemId) {

        const obj = { rating, userId, itemId }

        const res = await fetch(`${this._apiBaseServer}api/rating/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(obj)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/rating/ 
            , received ${res.status}`);
        }


        return await res.json();
    }

    async getRating(id, loginUserId) {

        const res = await fetch(`${this._apiBaseServer}api/rating/${id}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/rating/, received ${res.status}`);
        }
        const ratingsArr = await res.json();

        if (ratingsArr.length > 0) {

            const booleanResult = !ratingsArr.some((value) => value.userId === loginUserId)

            const overallRating = (ratingsArr.reduce((previousValue, currentValue) => {
                console.log(previousValue)
                console.log(currentValue.rating)
                previousValue += Number(currentValue.rating)
                return previousValue;
            }, 0)) / ratingsArr.length;

            return { booleanResult, overallRating };
        }

        return false
    }

}

export default new RatingService();