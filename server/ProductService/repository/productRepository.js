const Product = require('../models/ProductModel')

class ProductRepository{
    async create(productData){
        try{
            const newProduct = await Product.create(productData)
            return newProduct
        }
        catch(error){
            throw new Error(`Create product repository error: ${error}`)
        }
    }

    async findById(productId){
        try{
            const product = await Product.findById(productId)
            if(!product){
                throw new Error('Product not found')
            }
            return product
        }
        catch(error){
            throw new Error(`Find product by id repository error: ${error}`)
        }
    }

    async findAll(filter ={}){
        try{
            const product = await Product.find(filter)
            return product
        }
        catch(error){
            throw new Error(`Find all product respository error: ${error}`)
        }
    }

    async update(productId, updateData){
        try{
            const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {new: true})
            if(!updatedProduct){
                throw new Error('Product not found')
            }
            return updatedProduct
        }
        catch(error){
            throw new Error(`Update product repository error: ${error}`)
        }
    }

    async delete(productId){
        try{
            const deletedProduct = await Product.findByIdAndDelete(productId)
            if(!deletedProduct){
                throw new Error('Product not found')
            }
            return deletedProduct
        }
        catch(error){
            throw new Error(`Delete product repository error: ${error}`)
        }
    }
}

module.exports = new ProductRepository