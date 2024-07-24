const ProductUseCase = require('../usecases/productUseCase')
const fs = require('fs-extra')

class ProductController{
    async create(req, res){
        try{
            const productData = req.body
            if(req.files.images){
                productData.media.images = req.files.images.map(file => file.path)
            }

            if(req.files.videos){
                productData.media.videos = req.files.videos.map(file => file.path)
            }

            const newProduct = await ProductUseCase.createProduct(productData)
            res.status(200).json(newProduct)
        }
        catch(error){
            res.status(500).json({error: error.message})
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
            const product = await ProductUseCase.findProduct(productId)
            if(!product){
                return res.status(400).json({error: 'Product does not exist'})
            }

            const imagesDir = path.join(__dirname, '../uploads/images')
            const videosDir = path.join(__dirname, '../uploads/vidoes')

            if(product.media.images){
                for(const image of product.media.images){
                    await fs.remove(path.join(imagesDir, image))
                }
            }

            if(product.media.videos){
                for(const video of product.media.videos){
                    await fs.remove(path.join(videosDir, video))
                }
            }

            const deletedProduct = await ProductUseCase.deleteProduct(productId)
            res.status(200).json(deletedProduct)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new ProductController