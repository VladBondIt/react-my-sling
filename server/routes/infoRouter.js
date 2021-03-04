const Router = require('express')
const router = new Router()
const infoController = require('../controllers/infoController')

router.get('/:id', infoController.getInfo)
router.get('/', infoController.getAllInfo)

module.exports = router