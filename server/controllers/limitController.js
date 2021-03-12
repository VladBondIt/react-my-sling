const { Limit } = require('../models/models')

class LimitController {

    // async create(req, res) {
    //     const { limit } = req.body
    //     const limitCount = await Limit.create({ limit })
    //     return res.json(limitCount)
    // }

    async getLimit(req, res) {
        const id = 1

        const item = await Limit.findOne({ where: { id } })

        return res.json(item)
    }

    async updateLimit(req, res) {
        const { limit } = req.body
        const id = 1

        const items = await Limit.update({ limit }, {
            where: { id }
        })

        return res.json(items)
    }

}

module.exports = new LimitController()