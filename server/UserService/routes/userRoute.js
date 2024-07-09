const express = require('express')
const routes = express.Router()
const UserController = require('../controller/userController')
const { verifyToken } = require('../Utils/jwtUtils')

routes.post('/signup', UserController.signup)
routes.post('/login', UserController.login)
routes.put('/update', verifyToken, UserController.update)
routes.delete('/delete', verifyToken, UserController.deleteAccount)

module.exports = routes