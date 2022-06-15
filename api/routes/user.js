const { Router } = require("express");
const userController = require("../controllers/user");

const router = Router();

const userRoutes = (app) => {
    
    router.post("/", userController.postUserData);
    // router.get("/", userController.getUserByEmail);
    // router.get("/:id", userController.getUserById);
    // router.delete("/", userController.deleteUserByEmail);

    app.use("/user", router);
};

module.exports = userRoutes;