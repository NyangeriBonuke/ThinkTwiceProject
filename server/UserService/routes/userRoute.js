const express = require('express')
const routes = express.Router()
const UserController = require('../controller/userController')
const { verifyToken } = require('../Utils/jwtUtils')

routes.post('/signup', UserController.signup)
routes.post('/login', UserController.login)
routes.post('/logout', verifyToken, UserController.logout)
routes.put('/update', verifyToken, UserController.update)
routes.delete('/delete', verifyToken, UserController.deleteAccount)
routes.post('/refresh-token', UserController.refreshToken)

module.exports = routes