const Order = require('../models/OrderModel')

class OrderRepository{
    async create(orderData){
        try{
            const newOrder = await Order.create(orderData)
            return newOrder
        }
        catch(error){
            throw new Error(`Repo create order error: ${error}`)
        }
    }

    async findById(productId){
        try{
            const order = await Order.findById(productId).populate('user').populate('items.product')
            return order
        }
        catch(error){
            throw new Error(`Repo find by id error: ${error}`)
        }
    }
}

module.exports = new OrderRepository