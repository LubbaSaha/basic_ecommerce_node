const { Router } = require("express");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");

const loadRoutes = () => {
    const router = Router();

    userRoutes(router);
    categoryRoutes(router);

    return router;
}

module.exports = loadRoutes;