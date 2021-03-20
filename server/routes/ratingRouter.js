const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), ratingController.addRating)
router.get('/:id', ratingController.getRating)

module.exports = router