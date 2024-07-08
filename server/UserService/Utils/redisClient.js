const redis = require('redis')

const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

redisClient.on('error', (err) => {
    consle.error('Redis error', err)
})

redisClient.on('connect', () => {
    console.log('Connected to redis')
})

module.exports = redisClient