const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), basketController.addItem)
router.get('/items/:id', basketController.getBasketItems)
router.get('/:id', basketController.getBasket)

module.exports = router