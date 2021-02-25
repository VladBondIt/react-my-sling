const uuid = require('uuid')
const path = require('path')
const { Item, ItemInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(rea, res, next) {
        try {
            let { name, oldprice, price, brandId, typeId, info } = req.body
            const { img } = req.files

            let fileName = uuid.v4() + ".jpg"
            //Экспортируем объект path из експресса, передаем в функцию МВ метод резолв
            // с параметрами пути к папке статик, для адаптации пути под разные ОС.
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const item = await Item.create({ name, oldprice, price, brandId, typeId, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(({ description, material, size }) =>
                    ItemInfo.create({
                        description,
                        material,
                        size,
                        itemId: item.id
                    })
                )
            }

            return res.json(item)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, limit = 9, page = 1 } = req.query

        let offset = page * limit - limit

        let items;

        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            items = await Item.findAndCountAll({ where: { brandId }, limit, offset })

        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({ where: { typeId }, limit, offset })

        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({ where: { typeId, brandId }, limit, offset })

        }

        return items
    }
    async getOne(req, res) {
        const { id } = req.params

        const item = await Item.findOne({
            where: { id },
            include: [{ model: ItemInfo, as: 'info' }]
        })

        return res.json(item)
    }
}

module.exports = new ItemController()