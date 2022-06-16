const { Router } = require("express");
const adminController = require("../controllers/admin");

const router = Router();

const adminRoutes = (app) => {
    
    router.post("/", adminController.postAdminData);
    router.get("/all", adminController.getAdmins);
    // router.get("/:id", userController.getUserById);
    // router.delete("/", userController.deleteUserByEmail);

    app.use("/admin", router);
};

module.exports = adminRoutes;