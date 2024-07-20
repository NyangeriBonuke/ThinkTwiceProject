const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const routes = require('./routes/orderRoute')

require('./db')

app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})