const Cart = require("../model/Cart");

const redisClient = require("../utils/redis-client");

const postCartData = async (body) => {
    
    const cartData = {
        p_id: body.p_id,
        quantity: body.quantity
    };

    try {

        let cart = await redisClient.get(`cart-${body.u_id}`);
        cart = JSON.parse(cart);

        if (!cart) {
            cart = [];
            cart.push(cartData);
        } else {
            
            const foundIndex = cart.findIndex((item) => item.p_id === body.p_id);

            if (foundIndex !== -1) {

                const newQuantity = cart[foundIndex].quantity + cartData.quantity;

                if (newQuantity > 0 ) {
                    cart[foundIndex].quantity = newQuantity;
                } else {
                    cart.splice(foundIndex, 1);
                }

            } else {
                cart.push(cartData);
            }
        }

        redisClient.set(`cart-${body.u_id}`, JSON.stringify(cart));

        return {
            status: 200,
            cart
        };

    } catch (error) {
        console.log(error);
        
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getCartData = async () => {

    try {

        const cart = await Cart
            .query()
            .select("id", "u_id", "p_id", "quantity");
    
            return {
                status: 200,
                cart
            };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const updateCartQuantity = async (id, body) => {

    try {

        const successRes = {
            status: 200,
            msg: "cart is Updated"
        };

        const cartItem = await Cart.query().findOne({ id });

        if (!cartItem) {
            return {
                status: 400,
                msg: "Bad Request"
            };
        }

        const newQuantity = cartItem.quantity + body.quantity;

        if (newQuantity <= 0) {
            deleteCartById(id);
            return successRes;
        }

        await Cart
            .query()
            .patch({ quantity: newQuantity })
            .where({ id });

        return successRes;

    } catch (error) {
        console.log(error);

        return {
            status: 500,
            msg: "Server Error"
        };
    }
}

const deleteCartById = async (id) => {
    try {
        
        await Cart
            .query()
            .delete()
            .where({id});

        return {
            status: 200,
            msg: "Cart is deleted"
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
    postCartData,
    getCartData,
    updateCartQuantity,
    deleteCartById
};