const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role, name) => {
    return jwt.sign(
        { id, email, role, name },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )

}

class UserController {
    async registration(req, res, next) {
        const { name, phone, email, password, role } = req.body

        if (!email || !password) {
            return next(ApiError.badRequest("Необходимо заполнить Email и Пароль"))
        }

        const condidate = await User.findOne({ where: { email } })

        if (condidate) {
            return next(ApiError.badRequest("Такой пользователь уже существует"))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ name, phone, email, role, password: hashPassword })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role, user.name)

        return res.json({ token, basket })

    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal("Такого пользователя не существует"))
        }

        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Такого пользователя не существует"))
        }

        const token = generateJwt(user.id, user.email, user.role, user.name)

        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.name)

        res.json({ token })

    }
}

module.exports = new UserController()