const { Router } = require("express");
const productController = require("../controllers/product");
const { isAdmin } = require("../middlewares/auth");

const router = Router();

const productRoutes = (app) => {
    
    router.post("/", isAdmin,productController.postProductData);
    router.get("/all", productController.getProducts);
    router.patch("/:id", isAdmin, productController.updateProductById);
    router.patch("/publish/:id", isAdmin, productController.updatePublishProductById);
    router.get("/", productController.getProductById);
    // router.delete("/", userController.deleteUserByEmail);

    app.use("/product", router);
};

module.exports = productRoutes;