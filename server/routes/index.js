const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const infoRouter = require('./infoRouter')
const limitRouter = require('./limitRouter')


router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/info', infoRouter)
router.use('/limit', limitRouter)



module.exports = router