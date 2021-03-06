const uuid = require('uuid')
const path = require('path')
const { Item, ItemInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try {
            let { name, oldprice, price, brandId, typeId, info } = req.body
            const { img, firstSideImg, secondSideImg, thirdSideImg, } = req.files

            let imgsArr = [img, firstSideImg, secondSideImg, thirdSideImg]
            let fileNames = []
            //Экспортируем объект path из експресса, передаем в функцию МВ метод резолв
            // с параметрами пути к папке статик, для адаптации пути под разные ОС.


            imgsArr.forEach((value) => {
                let fileName = uuid.v4() + ".jpg"
                value.mv(path.resolve(__dirname, '..', 'static', fileName))
                fileNames.push(fileName)
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
                        thirdSideImg: fileNames[3],
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
        // let { brandId, typeId, limit = 9, page = 1 } = req.query

        // let offset = page * limit - limit

        let items;

        // if (!brandId && !typeId) {
        //     items = await Item.findAndCountAll({ limit, offset })
        // }
        // if (brandId && !typeId) {
        //     items = await Item.findAndCountAll({ where: { brandId }, limit, offset })

        // }
        // if (!brandId && typeId) {
        //     items = await Item.findAndCountAll({ where: { typeId }, limit, offset })

        // }
        // if (brandId && typeId) {
        //     items = await Item.findAndCountAll({ where: { typeId, brandId }, limit, offset })

        // }
        items = await Item.findAll()

        return res.json(items)
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