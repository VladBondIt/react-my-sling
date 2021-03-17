const { BasketItem, Basket } = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async addItem(req, res) {
        const { basketId, itemId } = req.body
        const basketItem = await BasketItem.create({ itemId, basketId })
        return res.json(basketItem)
    }

    async deleteItem(req, res) {
        const { basketId, itemId } = req.body
        const basketItem = await BasketItem.destroy({
            where: {
                itemId,
                basketId
            }
        })
        return res.json(basketItem)
    }

    async getBasketItems(req, res) {
        const { id: basketId } = req.params
        const basketItems = await BasketItem.findAll({ where: { basketId } })

        return res.json(basketItems)
    }

    async getBasket(req, res) {
        const { id: userId } = req.params
        const basket = await Basket.findOne({ where: { userId } })

        return res.json(basket)
    }

}

module.exports = new BasketController()