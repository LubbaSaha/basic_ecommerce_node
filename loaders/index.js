const expressLoader = require("./express");
const databaseLoader = require("./database");

const loader = (app) => {
    expressLoader(app);
    databaseLoader();
}

module.exports = loader;