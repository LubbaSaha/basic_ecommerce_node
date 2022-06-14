const express = require("express");

const loaders = require("./loaders");

const startServer = () => {
    const app = express();
    loaders(app);

    app.listen("3000", () => {
        console.log("Started");   
    });
}

startServer();