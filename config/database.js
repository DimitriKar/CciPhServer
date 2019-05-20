const redis = require('redis')

function redisConnect() {
    return new Promise((resolve, reject) => {
        const client = redis.createClient(process.env.REDIS_URL);

        client.on('error', function (err) {
            console.log('Error ' + err);
            reject()
        });

        client.on("connect", function () {
            console.log("Succes connect");
            resolve()
        })
    })
}

module.exports = {
    redisConnect
}
