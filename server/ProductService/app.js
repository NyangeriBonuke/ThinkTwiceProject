const express = require('express')
const app = express()
require('dotenv').config()
require('./db.js')
const routes = require('./routes/productRoute.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.get('/uploads', express.static('uploads'))

app.listen(process.env.PORT, () => {
    console.log('Server started')
})