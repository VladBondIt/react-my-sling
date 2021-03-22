const Router = require('express')
const router = new Router()
const mailerController = require('../controllers/mailerController')

router.post('/', mailerController.sendPost)


module.exports = router