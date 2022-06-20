require("dotenv").config();

const Redis = require("ioredis");

const redisConf = require("./redis-conf");

const redisClient = new Redis(redisConf[process.env.NODE_ENV]);

redisClient.on("error", function(err) {
	console.error(err);
});

redisClient.on("connect", function() {
    console.log("Connected to the Redis Server");
});

redisClient.on("ready", function() {
    console.log("Redis Instance is Ready!");
});

module.exports = redisClient;