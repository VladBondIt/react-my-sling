const uuid = require('uuid')
const { Item, ItemInfo, Rating, Review } = require('../models/models')
const path = require('path')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try {
            let { name, oldprice, price, brandId, typeId, info } = req.body
            const { img, firstSideImg, secondSideImg, } = req.files

            //Экспортируем объект path из ноды, передаем в функцию МВ метод резолв
            // с параметрами пути к папке статик, для адаптации пути под разные ОС.


            const fileNames = [img, firstSideImg, secondSideImg].map((value) => {
                let fileName = uuid.v4() + ".jpg"
                value.mv(path.resolve(__dirname, '..', 'static', fileName))
                return fileName;
            })

            const item = await Item.create({ name, oldprice, price, brandId, typeId, img: fileNames[0] })

            if (info) {
                info = JSON.parse(info)
                info.forEach(({ description, material, size }) =>
                    ItemInfo.create({
                        description,
                        material,
                        size,
                        firstSideImg: fileNames[1],
                        secondSideImg: fileNames[2],
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
        let { brandId, typeId, limit = 9, page = 1, type, sort } = req.query

        let offset = page * limit - limit

        let items;

        if (!type && !sort) {
            if (!brandId && !typeId) {
                items = await Item.findAndCountAll({
                    limit,
                    offset,
                })
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
        } else {
            if (!brandId && !typeId) {
                items = await Item.findAndCountAll({
                    limit,
                    offset,
                    order: [
                        [type, sort]
                    ]
                })
            }
            if (brandId && !typeId) {
                items = await Item.findAndCountAll({
                    where: { brandId },
                    limit,
                    offset,
                    order: [
                        [type, sort]
                    ]
                })

            }
            if (!brandId && typeId) {
                items = await Item.findAndCountAll({
                    where: { typeId },
                    limit,
                    offset,
                    order: [
                        [type, sort]
                    ]
                })

            }
            if (brandId && typeId) {
                items = await Item.findAndCountAll({
                    where: { typeId, brandId },
                    limit,
                    offset,
                    order: [
                        [type, sort]
                    ]
                })

            }

        }

        return res.json(items)
    }


    async getOne(req, res) {
        const { id } = req.params

        const item = await Item.findOne({
            where: { id },
            include: [{ model: ItemInfo, as: 'info' }],
        })


        return res.json(item)
    }

    async getItemsForCart(req, res) {
        const { arr } = req.body

        const resultArr = JSON.parse(arr)

        const items = await Item.findAll({
            where: {
                id: resultArr
            },
            include: [{ model: ItemInfo, as: 'info' }],
        })

        return res.json(items)
    }
}

module.exports = new ItemController()