const { Rating } = require('../models/models')
const ApiError = require('../error/ApiError');

class RatingController {
    async addRating(req, res) {
        const { rating, userId, itemId } = req.body

        const resRating = await Rating.create({ rating, userId, itemId })
        return res.json(resRating)
    }

    async getRating(req, res) {
        const { id } = req.params

        const ratings = await Rating.findAll({
            where: {
                itemId: id
            }
        })

        return res.json(ratings)
    }

}

module.exports = new RatingController()