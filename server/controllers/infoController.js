const { ItemInfo } = require('../models/models')

class InfoController {

    async getInfo(req, res) {
        const { id: itemId } = req.params

        const item = await ItemInfo.findOne({
            where: { itemId },
        })

        return res.json(item)
    }
    async getAllInfo(req, res) {

        const items = await ItemInfo.findAll()

        return res.json(items)
    }

}

module.exports = new InfoController()