const { Router } = require("express");
const orderController = require("../controllers/order");
const { isAdmin } = require("../middlewares/auth");

const router = Router();

const orderRoutes = (app) => {
    
    router.post("/", orderController.postOrderData);
    router.get("/all", orderController.getOrders);
    router.patch("/:id", isAdmin, orderController.updateOrderStatus);

    // router.get("/:id", userController.getUserById);
    // router.delete("/", userController.deleteUserByEmail);

    app.use("/order", router);
};

module.exports = orderRoutes;