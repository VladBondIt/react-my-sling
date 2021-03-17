const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), basketController.addItem)
router.get('/items/:id', checkRole('USER'), basketController.getBasketItems)
router.get('/:id', checkRole('USER'), basketController.getBasket)
router.delete('/cancel', checkRole('USER'), basketController.deleteItem)

module.exports = router