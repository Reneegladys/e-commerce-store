const product = require ('../models/productModels')

exports.getProducts = (req, res, next) => {
    res.status (200).json ({
        success: true,
        message: 'This route will show all products in database'
    })
}


exports.newProduct = async (req, res, next) => {

    const product = await product.create(req.body)
    res.status (201).json({
        success: true,
        product

    })
}