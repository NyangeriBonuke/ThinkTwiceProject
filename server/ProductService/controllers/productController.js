const ProductUseCase = require('../usecases/productUseCase')

class ProductController{
    async create(req, res){
        try{
            const productData = req.body
            if(req.files){
                productData.media = {
                    images: req.files.images ? req.files.images.map(file => file.path) : [],
                    videos: req.files.videos ? req.files.videos.map(file => file.path) : []
                }
            }

            const newProduct = await ProductUseCase.createProduct(productData)
            res.status(200).json(newProduct)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async find(req, res){
        try{
            const {productId} = req.params
            const product = await ProductUseCase.findProduct(productId)
            if(!product){
                return res.status(400).json(`Product does not exist`)
            }
            res.status(200).json(product)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async findAll(req, res){
        try{
            const filter = req.query
            const products = await ProductUseCase.getAllProducts(filter)
            res.status(200).json(products)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async update(req, res){
        try{
            const { productId } = req.params
            const productData = req.body
            const updatedProduct = await ProductUseCase.updateProduct(productId, productData)
            if(!updatedProduct){
                return res.status(400).json({error: 'Product not found'})
            }
            res.status(200).json(updatedProduct)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async delete(req, res){
        try{
            const { productId } = req.params
            const deletedProduct = await ProductUseCase.deleteProduct(productId)
            if(!deletedProduct){
                return res.status(400).json({error: 'Product not found'})
            }
            res.status(200).json(deletedProduct)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = new ProductController