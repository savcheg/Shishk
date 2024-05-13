const Router = require('express')
const productController = require('../controllers/ProductController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = new Router()

router.post('/create', authMiddleware, productController.create)
router.post('/delete', authMiddleware, productController.delete)
router.get('/get', authMiddleware, productController.get)

module.exports = router