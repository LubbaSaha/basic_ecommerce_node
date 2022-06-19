const { Router } = require("express");
const cartService = require("../controllers/cart");

const router = Router();

const cartRoutes = (app) => {
    
    router.post("/", cartService.postCartData);
    router.get("/all", cartService.getCartData);
    router.patch("/:id", cartService.updateCartQuantity);
    router.delete("/:id", cartService.deleteCartById);

    app.use("/cart", router);
};

module.exports = cartRoutes;