const redis = require('redis').createClient();


redis.on('error', (err) => {
    console.error('Redis connection error:', err);
  });


module.exports = {redis}

