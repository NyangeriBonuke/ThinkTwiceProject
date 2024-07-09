const redis = require('redis')

const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

redisClient.on('connect', () => {
    console.log('Connected to redis')
})

redisClient.on('ready', () => {
    console.log('Redis client is ready to be used')
})

redisClient.on('error', (err) => {
    consle.error('Redis error', err)
})

redisClient.on('end', () => {
    console.log('Redis has been disconnected')
})

module.exports = redisClient