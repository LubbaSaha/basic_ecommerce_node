const orderService = require("../../services/orderService");

const postOrderData = async (req, res) => {

    const result = await orderService.postOrderData(req.body);
    return res.status(result.status).json(result);
};

const getOrders = async (req, res) => {

    const result = await orderService.getOrders();
    return res.status(result.status).json(result);
};

const updateOrderStatus = async (req, res) => {

    const result = await orderService.updateOrderStatus(req.params.id, req.body);
    return res.status(result.status).json(result);
};

module.exports = {
    postOrderData,
    getOrders,
    updateOrderStatus
}