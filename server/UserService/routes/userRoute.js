const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/userController')

routes.post('/signup', UserController.signUp)

module.exports = routes