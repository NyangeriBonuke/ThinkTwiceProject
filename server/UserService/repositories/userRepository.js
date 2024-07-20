const User = require('../models/UserModel')
const redisClient = require('../Utils/redisClient')

class UserRepository{
    async createUser(userData){
        try{
            const user = await User.create(userData)
            return user
        }
        catch(error){
            throw new Error(`Create user Error: ${error}`)
        }
    }

    async getAllUsers(){
        try{
            const users = await User.find()
            return users
        }
        catch(error){
            throw new Error(`Get all users error: ${error}`)
        }
    }

    async findUser(email){
        try{
            const user = await User.findOne({email})
            return user
        }
        catch(error){
            throw new Error(`Find user Error ${error}`)
        }
    }

    async findUserById(id){
        try{
            const user = await User.findById(id)
            return user
        }
        catch(error){
            throw new Error(`Find user by id Error: ${error}`)
        }
    }

    async updateUser(id, updateData){
        try{
            const user = await User.findByIdAndUpdate(id, updateData, {new: true})
            return user
        }
        catch(error){
            throw new Error(`Update user error: ${error.message}`)
        }
    }

    async userDelete(id){
        try{
            await User.findByIdAndDelete(id)
        }
        catch(error){
            throw new Error(`Delete user error: ${error}`)
        }
    }

    async updateRefreshToken(id, refreshToken){
        try{
            await User.findByIdAndUpdate(id, { refreshToken })
        }
        catch(error){
            throw new Error(`Update refresh token error: ${error}`)
        }
    }

    async deleteRefreshToken(id){
        try{
            await User.findByIdAndUpdate(id, { $unset: { refreshToken: 1 } })
        }
        catch(error){
            throw new Error(`Delete refresh token ${error}`)
        }
    }

    /*
    async updateRefreshTokenRedis(userId, refreshToken){
        try{
            await redisClient.set(`refreshToken:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60)
        }
        catch(error){
            throw new Error(`Redis update refresh token ${error}`)
        }
    }

    async getRefreshToken(userId){
        return new Promise((resolve, reject) => {
            redisClient.get(`refreshToken:${userId}`, (err, token) => {
                if(err){
                    return reject(`Get refresh token error ${err}`)
                }
                resolve(token)
            })
        })
    }

    async deleteRefreshToken(userId){
        return new Promise((resolve, reject) => {
            redisClient.del(`refreshToken:${userId}`, (err) => {
                if(err){
                    return reject(`Delete refresh token error ${err}`)
                }
                resolve()
            })
        })
    }
    */
}

module.exports = new UserRepository