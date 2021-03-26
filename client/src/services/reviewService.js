import BaseService from "./baseService";

class ReviewService extends BaseService {
    async postReview(name, text, userId, itemId) {

        const obj = { name, text, userId, itemId }

        const res = await fetch(`${this._apiBaseServer}api/review/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `${this._auth}`
            },
            body: JSON.stringify(obj)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBaseServer}api/review/ 
            , received ${res.status}`);
        }


        return await res.json();
    }

    // async getRating(id, loginUserId) {

    //     const res = await fetch(`${this._apiBaseServer}api/review/${id}`);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${this._apiBaseServer}api/review/, received ${res.status}`);
    //     }
    //     const ratingsArr = await res.json();

    //     if (ratingsArr.length > 0) {

    //         const booleanResult = !ratingsArr.some((value) => value.userId === loginUserId)

    //         const overallRating = (ratingsArr.reduce((previousValue, currentValue) => {
    //             previousValue += Number(currentValue.rating)
    //             return previousValue;
    //         }, 0)) / ratingsArr.length;

    //         return { booleanResult, overallRating };
    //     }

    //     return false
    // }

}

export default new ReviewService();