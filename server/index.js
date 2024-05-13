require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const express = require('express')
const router = require('./routers/index')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cookieParser = require('cookie-parser')

const PORT = process.env.SERVER_PORT || 3000
const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)})
    } catch (e) {

    }
}

start()