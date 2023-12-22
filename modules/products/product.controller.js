const produtModel = require('../products/product.model')

// all products find from database
exports.getProducts = async (req, res) => {
    try {
        const products = await produtModel.find()
        res.send(products)
    }
    catch (error) {
        res.send({status: 401, error})
    }
}

// single product find by id from database
exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await produtModel.findById(id)
        res.send(product)
    }
    catch (error) {
        res.send({status: 401, error})
    }
}