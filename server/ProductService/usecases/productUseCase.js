const ProductRepository = require('../repository/productRepository')

class ProductUseCase{
    async createProduct(productData){
        try{
            const newProduct = await ProductRepository. 
        }
        catch(error){
            throw new Error(`Create product usecase error: ${error}`)
        }
    }
}

module.exports = new ProductUseCase