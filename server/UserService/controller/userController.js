const UserUseCase = require('../useCases/userUseCase')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserController{
    async signup(req, res){
        try{
            const { userName, email, password } = req.body
            if(!userName || !email || !password){
                res.status(400).send('All fields are required')
            }
            const { user, token } = await UserUseCase.signupUser(userName, email, password)
            res.status(201).json({user, token})
        }
        catch(error){
            if(error.message === 'Wrong Credentials'){
                res.status(409).json({error: error.message})
            }
            else{
                res.status(500).json({error: error.message})
            }
        }
    }

    async login(req, res){
        try{
            const { email, password } = req.body
            if(!email || !password){
                res.status(400).send('All fields are required')
            }
            const { user, token } = await UserUseCase.loginUser(email, password)
            res.status(200).json({user, token})
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res){
        try{
            const { userName } = req.body
            if(!userName){
                res.status(400).send('Username required')
            }
            const updatedUser = await UserUseCase.updateUserName(req.user.id, userName)
            res.status(200).json(updatedUser)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async deleteAccount(req, res){
        try{
            await UserUseCase.deleteUser(req.user.id)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async refreshToken(req, res){
        try{
            const { token } = req.body
            if(!token){
                return res.status(400).json({error: 'Refresh token is required'})
            } 
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new UserController