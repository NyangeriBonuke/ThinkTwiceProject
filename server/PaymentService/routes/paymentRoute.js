const express = require('express')
const mpesaController = require('../controllers/mpesaController')
const { generateToken } = require('../utils/tokenUtil')
const routes = express.Router()

routes.post('/stkPush', generateToken, mpesaController.stkPush)
routes.post('/callback', mpesaController.callBack)

module.exports = routes