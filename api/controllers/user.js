const userService = require("../../services/userService");

const postUserData = async (req, res) => {

    const result = await userService.postUserData(req.body);
    return res.status(result.status).json(result);
};

module.exports = {
    postUserData
}