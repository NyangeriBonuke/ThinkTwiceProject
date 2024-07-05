const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/userRoute')

app.use('api', routes)

require('./db')

app.listen(process.env.PORT, () => {
    console.log("Server started")
})