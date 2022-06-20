const redisConf = {
    development: {
        host: "redis-18196.c85.us-east-1-2.ec2.cloud.redislabs.com",
        port: "18196",
        family: "4",
        password: "c8Ey0hq41kL22SsfMw7ZQM9JvxOvCGJZ",
        db: 0,
        showFriendlyErrorStack: true,
        retryStrategy: function() {
            const delay = 20000;
            return delay;
        },
    },
    production: {
        host: "127.0.0.1",
        port: "6379",
        family: "4",
        password: "$rEdIS692021#",
        db: 0,
        showFriendlyErrorStack: true,
        retryStrategy: function() {
            const delay = 20000;
            return delay;
        },
    },
    staging: {
        host: "127.0.0.1",
        port: "6379",
        family: "4",
        password: "123456",
        db: 0,
        showFriendlyErrorStack: true,
        retryStrategy: function() {
            const delay = 20000;
            return delay;
        },
    }
}

module.exports = redisConf;