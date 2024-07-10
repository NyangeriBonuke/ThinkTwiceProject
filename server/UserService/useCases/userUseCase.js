const userRepository = require('../repositories/userRepository')
const UserRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt')
const { generateToken, generateRefreshToken } = require('../Utils/jwtUtils')

class UserUseCase{
    async signupUser(userName, email, password){
        try{
            const isUser = await UserRepository.findUser(email)
            if(isUser){
                throw new Error('Wrong Credentials')
            }
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = await UserRepository.createUser({userName, email, password:hashedPassword})
            const token = generateToken(newUser)
            const refreshToken = generateRefreshToken(newUser)
            await this.refreshTokenUpdate(newUser._id, refreshToken) //store refreshtoken in the db
            //await UserRepository.updateRefreshTokenRedis(newUser._id, refreshToken)
            return {user: newUser, token, refreshToken}
        }
        catch(error){
            throw new Error(`Usecase signup error ${error}`)
        }
    }

    async loginUser(email, password){
        try{
            const user = await userRepository.findUser(email)
            if(!user){
                throw new Error('Wrong Credentials')
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                throw new Error('Wrong Credentials')
            }
            const token = generateToken(user)
            const refreshToken = generateRefreshToken(user)
            await this.refreshTokenUpdate(user._id, refreshToken) //store refreshToken in db
            //await UserRepository.updateRefreshTokenRedis(user._id, refreshToken)
            return {user, token, refreshToken}
        }
        catch(error){
            throw new Error(`Usecase login error ${error}`)
        }
    }

    async logoutUser(id){
        try{
            await UserRepository.deleteRefreshToken(id)
        }
        catch(error){
            throw new Error(`Usecase logout error ${error}`)
        }
    }

    async updateUserName(id, userName){
        try{
            const updatedUser = await userRepository.updateUser(id, {userName})
            return updatedUser
        }
        catch(error){
            throw new Error(`Update user error ${error}`)
        }
    }

    async deleteUser(id){
        try{
            await userRepository.userDelete(id)
        }
        catch(error){
            throw new Error(`Delete user error ${error}`)
        }
    }

    async findUserUsingId(id){
        try{
            const user = await userRepository.findUserById(id)
            return user
        }
        catch(error){
            throw new Error(`Find user by id error ${error}`)
        }
    }

    async refreshTokenUpdate(id, refreshToken){
        try{
            await UserRepository.updateRefreshToken(id, refreshToken)
        }
        catch(error){
            throw new Error(`Update refresh token error ${error}`)
        }
    }
}

module.exports = new UserUseCase