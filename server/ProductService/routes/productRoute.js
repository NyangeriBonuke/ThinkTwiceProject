const express = require('express')
const routes = express.Router()
const ProductController = require('../controllers/productController')
const { verifyToken, verifyAdmin } = require('../utils/jwtUtils')

routes.post('/product', verifyToken, verifyAdmin, ProductController.create)
routes.get('/product/:productId', ProductController.find)
routes.get('/product', ProductController.findAll)
routes.put('/product/:productId', verifyToken, verifyAdmin, ProductController.update)
routes.delete('/product/:productId', verifyToken, verifyAdmin, ProductController.delete)

module.exports = routes