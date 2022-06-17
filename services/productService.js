const Product = require("../model/Product");

const postProductData = async (body) => {
    
    const productData = {
        p_name: body.p_name,
        p_des: body.p_des,
        is_publish: body.is_publish,
        a_id: body.a_id,
        review_id: body.review_id,
        cat_id: body.cat_id,
    }

    console.log(productData);

    try {

        const product = await Product.query().insert(productData);

        return {
            status: 200,
            product
        };

    } catch (error) {
        console.log(error);
        
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getProducts = async (data) => {

    try {

        const product = await Product
            .query()
            .select("id", "p_name", "p_des", "review_id", "a_id", "cat_id", "is_publish")
            .limit(data.limit)
            .offset(data.offset);

            console.log(product);

            return {
                status: 200,
                product
            };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const updateProductById = async (id, body) => {

    const updatedData = {
        p_name: body.p_name,
        p_des: body.p_des,
        is_publish: body.is_publish,
        cat_id: body.cat_id,
    }

    console.log(id);

    try {
        await Product
            .query()
            .patch(updatedData)
            .where({id});

        return {
            status: 200,
            msg: "Product is Updated"
        };

    } catch (error) {
        console.log(error);

        return {
            status: 500,
            msg: "Server Error"
        };
    }
}

const updatePublishProductById = async (id, body) => {
    const updatedData = {
        is_publish: body.is_publish
    }

    try {
        await Product
            .query()
            .patch(updatedData)
            .where({id});

        return {
            status: 200,
            msg: "Product is Updated"
        };

    } catch (error) {
        console.log(error);

        return {
            status: 500,
            msg: "Server Error"
        };
    }
}

const getProductById = async (id) => {

    try {

        const product = await Product
            .query()
            .select("id", "p_name", "p_des", "review_id", "a_id", "cat_id", "is_publish")
            .findOne({ id });

        if (!product) {
            return {
                status: 404,
                msg: "Not found"
            };
        }

        return {
            status: 200,
            product
        };

    } catch (error) {
        console.log(error);

        return {
            status: 500,
            msg: "Server error"
        };
    }
}

module.exports = {
    postProductData,
    getProducts,
    updateProductById,
    updatePublishProductById,
    getProductById
};