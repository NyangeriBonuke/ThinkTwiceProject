const express = require('express')
const routes = express.Router()
const UserController = require('../controller/userController')
const { verifyToken } = require('../Utils/jwtUtils')
const userController = require('../controller/userController')
const { userValidator } = require('../Utils/validator')

routes.post('/signup', userValidator, UserController.signup)
routes.post('/login', userValidator, UserController.login)
routes.post('/logout/:id', verifyToken, UserController.logout)
routes.get('/user', verifyToken, userController.getAllUsers)
routes.put('/user/:id', verifyToken, UserController.update)
routes.delete('/user/:id', verifyToken, UserController.deleteAccount)
routes.post('/refresh-token', UserController.refreshToken)

module.exports = routes