const { Router } = require("express");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/product");

const loadRoutes = () => {
    const router = Router();

    userRoutes(router);
    adminRoutes(router);
    categoryRoutes(router);
    productRoutes(router);

    return router;
}

module.exports = loadRoutes;