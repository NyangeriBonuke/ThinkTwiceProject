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
}

module.exports = new UserRepository