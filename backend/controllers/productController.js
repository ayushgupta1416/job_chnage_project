const Product = require("../models/productModels")

//create Product


exports.createProduct = async (req, res, next)=>{
    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    })
}

exports.getAllProducts = (req, res, next) =>{
    res.status(200).json({message: "Route is working fine"})
}