const OrderRepository = require('../repository/orderRepository')

class OrderUsecase{
    async createOrder(data){
        try{
            const order = await OrderRepository.create(data)
            return order
        }
        catch(error){
            throw new Error(`Usecase create order error: ${error}`)
        }
    }

    async findOrder(orderId){
        try{
            const order = await OrderRepository.findById(orderId)
            return order
        }
        catch(error){
            throw new Error(`Usesecase find order by id error: ${error}`)
        }
    }

    async getOrders(){
        try{
            const orders = await OrderRepository.findAll()
            return orders
        }
        catch(error){
            throw new Error(`Usecase get all orders error: ${error}`)
        }
    }

    async updateOrder(orderId, orderData){
        try{
            const updatedOrder = await OrderRepository.update(orderId, orderData)
            return updatedOrder
        }
        catch(error){
            throw new Error(`Usecase update orders error: ${error}`)
        }
    }

    async deleteOrder(orderId){
        try{
            const deletedOrder = await OrderRepository.delete(orderId)
            return deletedOrder
        }
        catch(error){
            throw new Error(`Usecase deleted order error: ${error}`)
        }
    }
}

module.exports = new OrderUsecase