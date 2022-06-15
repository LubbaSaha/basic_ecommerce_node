const { Router } = require("express");
const categoryController = require("../controllers/category");

const router = Router();

const categoryRoutes = (app) => {
    
    router.post("/", categoryController.postCategoryData);
    router.get("/all", categoryController.getCategory);
    // router.get("/:id", userController.getUserById);
    // router.delete("/", userController.deleteUserByEmail);

    app.use("/cat", router);
};

module.exports = categoryRoutes;