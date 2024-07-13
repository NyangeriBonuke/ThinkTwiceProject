const express = require('express')
const routes = express.Router()
const ProductController = require('../controllers/productController')

routes.post('/products', ProductController.create)
routes.get('/product/:productId', ProductController.find)
routes.get('/products', ProductController.findAll)
routes.put('/products/:productId', ProductController.update)
routes.delete('/products', ProductController.delete)

module.exports = routes