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

    async findUserById(id){
        try{
            const user = await User.findById(id)
            return user
        }
        catch(error){
            throw new Error(`Find user by id Error ${error}`)
        }
    }

    async updateUser(id, updateData){
        try{
            const user = await User.findByIdAndUpdate(id, updateData, {new: true})
            return user
        }
        catch(error){
            throw new Error(`Update user error ${error.message}`)
        }
    }

    async userDelete(id){
        try{
            await User.findByIdAndDelete(id)
        }
        catch(error){
            throw new Error(`Delete user error ${error}`)
        }
    }
}

module.exports = new UserRepository