const Category = require("../model/Category");

const postCategoryData = async (body) => {
    
    const categoryData = {
        cat_name: body.cat_name
    }

    try {

        const category = await Category.query().insert(categoryData);

        return {
            status: 200,
            category
        };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getCategory = async () => {

    try {

        const category = await Category
            .query()
            .select("id", "cat_name");
    
            return {
                status: 200,
                category
            };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

module.exports = {
    postCategoryData,
    getCategory
};