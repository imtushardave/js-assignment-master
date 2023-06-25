const redis = require('redis');
const DEFAULT_EXPIRATION = 2000;

let redisClient;

(async () => {
  redisClient = redis.createClient({
    socket: {
        host: 'redis-server',
        port: '6379'
    }
  });
  redisClient.on("error", (error) => console.error(`Redis client Error : ${error}`));

  await redisClient.connect();
  console.log('Redis Client Connected Successfully');
})();


// get or set api responses to the radis cache
const getOrSetCache = async (key, callback) => {
    console.log('inside getOrSetCache');
    const data = await redisClient.get(key);
    if (data != null){
        return JSON.parse(data);
    } 

    const freshData = await callback();
    await redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
    return freshData;
}

module.exports = getOrSetCache;