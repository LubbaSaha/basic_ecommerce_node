const { Router } = require("express");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const adminRoutes = require("./routes/admin");

const loadRoutes = () => {
    const router = Router();

    userRoutes(router);
    adminRoutes(router);
    categoryRoutes(router);

    return router;
}

module.exports = loadRoutes;