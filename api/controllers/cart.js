const cartService = require("../../services/cartService");

const postCartData = async (req, res) => {

    const result = await cartService.postCartData(req.body);
    return res.status(result.status).json(result);
};

const getCartData = async (req, res) => {

    const result = await cartService.getCartData();
    return res.status(result.status).json(result);
};

const updateCartQuantity = async (req, res) => {

    const result = await cartService.updateCartQuantity(req.params.id, req.body);
    return res.status(result.status).json(result);
};

const deleteCartById = async (req, res) => {

    const result = await cartService.deleteCartById(req.params.id);
    return res.status(result.status).json(result);
}

module.exports = {
    postCartData,
    getCartData,
    updateCartQuantity,
    deleteCartById
}