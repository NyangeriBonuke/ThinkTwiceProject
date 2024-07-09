const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/userRoute')
const cors = require('cors')
require('./Utils/redisClient')

require('./db')

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log("Server started")
})