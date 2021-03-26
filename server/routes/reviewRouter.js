const Router = require('express')
const router = new Router()
const reviewController = require('../controllers/reviewController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('USER'), reviewController.addReview)
router.get('/:id', reviewController.getReview)



module.exports = router