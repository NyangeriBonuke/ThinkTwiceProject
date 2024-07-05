const User = require('../models/UserModel')

class UserRepository{
    async createUser(userData){
        try{
            const user = await User.create(userData)
            return user
        }
        catch(error){
            throw new Error(`Create user Error ${error}`)
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
}

module.exports = new UserRepository