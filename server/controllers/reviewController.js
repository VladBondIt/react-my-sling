const { Review } = require('../models/models')
const ApiError = require('../error/ApiError');

class ReviewController {
    async addReview(req, res) {
        const { name, text, userId, itemId } = req.body

        const review = await Review.create({ name, text, userId, itemId })

        return res.json(review)
    }

    async getReview(req, res) {
        const { id } = req.params

        const ratings = await Rating.findAll({
            where: {
                itemId: id
            }
        })

        return res.json(ratings)
    }

}

module.exports = new ReviewController()