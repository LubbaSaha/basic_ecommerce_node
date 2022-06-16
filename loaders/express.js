const bodyParser = require("body-parser");
const loadRoutes = require("../api");

const expressLoader = (app) => {
    app.use(bodyParser.json({
        limit: "50mb"
    }));

    app.use((req, res, next) => {
        const is_admin = req.headers.authorization;
        
        req.is_admin = is_admin === "true";

        next();
    });

    app.use("/", loadRoutes());
}

module.exports = expressLoader;