const { Limit } = require('../models/models')
const fs = require('fs');

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

    async writeLimit(req, res) {

        const { limit } = req.body

        fs.writeFile('../../react-my-sling/client/src/services/limit.js', `export const LIMIT = ${limit}`, 'utf8', function (err) {
            if (err) console.log(err);
        });

        return res

    }

}

module.exports = new LimitController()