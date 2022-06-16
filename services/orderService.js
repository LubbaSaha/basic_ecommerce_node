const Order = require("../model/Order");

const postOrderData = async (body) => {
    
    const orderData = {
        u_id: body.u_id,
        status: body.status,
        user_name: body.user_name,
        email: body.email,
        address: body.address
    }

    try {

        const order = await Order.query().insert(orderData);

        return {
            status: 200,
            order
        };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getOrders = async () => {

    try {

        const order = await Order
            .query()
            .select("id", "u_id", "status", "user_name", "email", "address");
    
            return {
                status: 200,
                order
            };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const updateOrderStatus = async (id, body) => {

    const updatedData = {
        status: body.status
    }

    try {
        await Order
            .query()
            .patch(updatedData)
            .where({id});

        return {
            status: 200,
            msg: "Order status is Updated"
        };

    } catch (error) {
        console.log(error);

        return {
            status: 500,
            msg: "Server Error"
        };
    }
}

module.exports = {
    postOrderData,
    getOrders,
    updateOrderStatus
};