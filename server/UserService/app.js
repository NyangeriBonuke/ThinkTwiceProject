const express = require('express')
const app = express()
require('dotenv').config()

require('./db')

app.listen(process.env.PORT, () => {
    console.log("Server started")
})