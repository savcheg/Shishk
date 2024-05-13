const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    isAdmin: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
})

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.TEXT, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}

})

User.hasOne(Token)
Token.belongsTo(User)

module.exports = {
    User,
    Token
}