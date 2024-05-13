const {User} = require('../models/models')
const ApiError = require('../exceptions/apiError')
const bcrypt = require('bcrypt')
const UserDto = require("../dtos/userDto");
const tokenService = require('./TokenService')

class UserService {

    async registration(name, surname, email, password) {
        const candidate = await User.findOne({
            where: {
                email: email
            }
        })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        } else {
            const hashPassword = await bcrypt.hash(password, 3)
            const user = await User.create({
                name: name,
                surname: surname,
                email: email,
                password: hashPassword
            })
            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(user.id, tokens.refreshToken)

            return {
                ...tokens,
                user: userDto
            }
        }
    }

    async login(email, password) {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findByPk(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = new UserService()