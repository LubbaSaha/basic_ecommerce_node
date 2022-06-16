const adminService = require("../../services/adminService");

const postAdminData = async (req, res) => {

    const result = await adminService.postAdminData(req.body);
    return res.status(result.status).json(result);
};

const getAdmins = async (req, res) => {

    const result = await adminService.getAdmins();
    return res.status(result.status).json(result);
};

module.exports = {
    postAdminData,
    getAdmins
}