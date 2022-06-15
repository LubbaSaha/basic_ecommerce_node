const categoryService = require("../../services/categoryService");

const postCategoryData = async (req, res) => {

    const result = await categoryService.postCategoryData(req.body);
    return res.status(result.status).json(result);
};

const getCategory = async (req, res) => {

    const result = await categoryService.getCategory();
    return res.status(result.status).json(result);
};

module.exports = {
    postCategoryData,
    getCategory
}