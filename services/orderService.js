const Order = require("../model/Order");
const userService = require("../services/userService");

const { orderStatus, userStatus } = require("../utils/const");

const postOrderData = async (body) => {
    
    const orderData = {
        u_id: null,
        status: orderStatus.PENDING,
        address: body.address,
    };

    try {
        
        if (!body.u_id) {

            let user = null;

            user = await userService.doesUserExist(body.email);

            if (!user) {
            
                user = await userService.postUserData({
                    user_name: body.user_name,
                    email: body.email,
                    password: body.password,
                    status: userStatus.ACTIVE
                });

            }

            console.log(user);

            orderData.u_id = user.id ? user.id : user.user.id;
        }

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
            .select("id", "u_id", "status", "address");
    
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