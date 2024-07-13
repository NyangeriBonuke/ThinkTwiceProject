const ProductRepository = require('../repository/productRepository')

class ProductUseCase{
    async createProduct(productData){
        try{
            const newProduct = await ProductRepository.create(productData)
            return newProduct
        }
        catch(error){
            throw new Error(`Create product usecase error: ${error}`)
        }
    }

    async findProduct(productId){
        try{
            const product = await ProductRepository.findById(productId)
            return product
        }
        catch(error){
            throw new Error(`Find product by id usecase error: ${error}`)
        }
    }

    async getAllProducts(filter={}){
        try{
            const products = await ProductRepository.findAll(filter)
            return products
        }
        catch(error){
            throw new Error(`Get all products usecase error: ${error}`)
        }
    }

    async updateProduct(productId, productData){
        try{
            const productUpdate = await ProductRepository.update(productId, productData)
            return productUpdate
        }
        catch(error){
            throw new Error(`Update product error: ${error}`)
        }
    }

    async deleteProduct(productId){
        try{
            const productDeleted = await ProductRepository.delete(productId)
            return productDeleted
        }
        catch(error){
            throw new Error(`Delete product error: ${error}`)
        }
    }
}

module.exports = new ProductUseCase