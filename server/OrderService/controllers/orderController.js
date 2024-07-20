const OrderUsecase = require('../usecases/orderUsecase')

class OrderController{
    async createOrder(req , res){
        try{
            const orderData = req.body
            const order = await OrderUsecase.createOrder(orderData)
            res.status(200).json(order)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getOrderById(req, res){
        try{
            const orderId = req.params.id
            if(!orderId){
                return res.status(400).json('Order id is required')
            }
            const order = await OrderUsecase.findOrder(orderId)
            if(!order){
                return res.status(404).json('Order not found')
            }
            res.status(200).json(order)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getAllOrders(req, res){
        try{
            const orders = await OrderUsecase.getOrders()
            res.status(200).json(orders)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res){
        try{
            const orderId = req.params.id
            if(!orderId){
                return res.status(400).json('Order id required')
            }
            const orderData = req.body
            if(!orderData){
                return res.status(400).json('Data is required')
            }
            const updatedOrder = await OrderUsecase.updateOrder(orderId, orderData)
            res.status(200).json(updatedOrder)
        }
        catch{
            res.status(500).json({error: error.message})
        }
    }

    async delete(req, res){
        try{
            const orderId = req.params.id
            if(!orderId){
                return res.status(400).json('Order id is required')
            }
            const deletedOrder = await OrderUsecase.deleteOrder(orderId)
            res.status(200).json(deletedOrder)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new OrderController