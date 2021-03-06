const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const infoRouter = require('./infoRouter')
const limitRouter = require('./limitRouter')
const basketRouter = require('./basketRouter')
const ratingRouter = require('./ratingRouter')
const mailerRouter = require('./mailerRouter')


router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/info', infoRouter)
router.use('/limit', limitRouter)
router.use('/basket', basketRouter)
router.use('/rating', ratingRouter)
router.use('/mail', mailerRouter)




module.exports = router