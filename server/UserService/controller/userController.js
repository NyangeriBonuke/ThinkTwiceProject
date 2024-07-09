const UserUseCase = require('../useCases/userUseCase')
const jwt = require('jsonwebtoken')
const { verfiyRefreshToken, generateRefreshToken, generateToken } = require('../Utils/jwtUtils')
require('dotenv').config()

class UserController{
    async signup(req, res){
        try{
            const { userName, email, password } = req.body
            if(!userName || !email || !password){
                res.status(400).send('All fields are required')
            }
            const { user, token, refreshToken } = await UserUseCase.signupUser(userName, email, password)
            res.status(201).json({user, token, refreshToken})
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
            const { user, token, refreshToken } = await UserUseCase.loginUser(email, password)
            res.status(200).json({user, token, refreshToken})
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    } 

    async logout(req, res){
        try{
            const { userId } = req.body
            if(!userId){
                return res.status(400).json('User id reqired')
            }
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

    /*
    async refreshToken(req, res){
        try{
            const { refreshToken } = req.body
            if(!refreshToken){
                return res.status(400).json({error: 'Refresh token is required'})
            }
            const payload = verfiyRefreshToken(refreshToken)
            const user = await UserUseCase.findUserUsingId(payload.id)
            //if(!user || user.refreshToken !== refreshToken){ //check if the user.refreshToken exists in the database
               // return res.status(403).json({error: 'Invalid refresh token'})
            //}
            const newToken = generateToken(user)
            const newRefreshToken = generateRefreshToken(user)
            //await UserUseCase.updateRefreshToken(user._id, newRefreshToken) //storing the refreshtoken in the db
            res.status(200).json({token: newToken, refreshToken: newRefreshToken})
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
    */

    async refreshTokenRedis(req, res){
        const { refreshToken } = req.body
        if(!refreshToken){
            return res.status(400).json({error: 'Refresh token required'})
        }
        const payload = verfiyRefreshToken(refreshToken)
        const user = await UserUseCase.findUserUsingId(payload.id)
        const storedRefreshToken = await UserUseCase.generateRefreshToken(user._id)
        if(!storedRefreshToken || storedRefreshToken !== refreshToken){
            return res.status(403).json({error: 'Invalid refresh token'})
        }
        const newToken = generateToken(user)
        const newRefreshToken = generateRefreshToken(user)
        await UserUseCase.updateRefreshToken(user._id, newRefreshToken)
        res.status(200).json({token: newToken, refreshToken: newRefreshToken})
    }
}

module.exports = new UserController