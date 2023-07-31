const Redis = require("ioredis");


const redisClient = Redis.createClient({
    
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  });

module.exports = redisClient


