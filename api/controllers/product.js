const productService = require("../../services/productService");

const postProductData = async (req, res) => {

    const result = await productService.postProductData(req.body);
    return res.status(result.status).json(result);
};

const getProducts = async (req, res) => {

    const result = await productService.getProducts(req.query);
    return res.status(result.status).json(result);
};

const updateProductById = async (req, res) => {

    const result = await productService.updateProductById(req.params.id, req.body);
    return res.status(result.status).json(result);
};

const updatePublishProductById = async (req, res) => {

    const result = await productService.updatePublishProductById(req.params.id, req.body);
    return res.status(result.status).json(result);
};

const getProductById = async (req, res) => {

    const result = await productService.getProductById(req.query.id);
    return res.status(result.status).json(result);
}

module.exports = {
    postProductData,
    getProducts,
    updateProductById,
    updatePublishProductById,
    getProductById
}