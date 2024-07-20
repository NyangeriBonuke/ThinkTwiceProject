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

    async findById(orderId){
        try{
            const order = await Order.findById(orderId)
            return order
        }
        catch(error){
            throw new Error(`Repo find by id error: ${error}`)
        }
    }

    async findAll(){
        try{
            const orders = await Order.find()
            return orders
        }
        catch(error){
            throw new Error(`Repo find all error ${error}`)
        }
    }

    async update(orderId, updateData){
        try{
            const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true })
            return updatedOrder
        }
        catch(error){
            throw new Error(`Repo update order error ${error}`)
        }
    }

    async delete(orderId){
        try{
            const deletedOrder = await Order.findByIdAndDelete(orderId)
            return deletedOrder
        }
        catch(error){
            throw new Error(`Repo delete order error ${error}`)
        }
    }
}

module.exports = new OrderRepository