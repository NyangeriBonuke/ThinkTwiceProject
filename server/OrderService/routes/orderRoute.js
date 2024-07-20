const express = require('express')
const OrderController = require('../controllers/orderController')
const routes = express.Router()

routes.post('/order', OrderController.createOrder)
routes.get('/order/:id', OrderController.getOrderById)
routes.get('/order', OrderController.getAllOrders)
routes.put('/order/:id', OrderController.update)
routes.delete('/order/:id', OrderController.delete)

module.exports = routes