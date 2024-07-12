const express = require('express')
const app = express()
require('dotenv').config()
require('./db.js')

app.listen(process.env.PORT, () => {
    console.log('Server started')
})