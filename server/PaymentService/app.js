const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes/paymentRoute')

app.use(express.json())
app.use(cors())

app.use('/api', routes)

require('./db.js')

app.listen(process.env.PORT, () => {
    console.log('Server started')
})