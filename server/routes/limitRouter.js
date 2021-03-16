const Router = require('express')
const router = new Router()
const limitController = require('../controllers/limitController')
const checkRole = require('../middleware/checkRoleMiddleware')

// router.post('/', limitController.create)
router.get('/', limitController.getLimit)
// router.put('/', checkRole('ADMIN'), limitController.updateLimit)
router.post('/', checkRole('ADMIN'), limitController.writeLimit)


module.exports = router