const UserRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt')

class UserUseCase{
    async signupUser(userName, email, password){
        try{
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = await UserRepository.createUser({userName, email, password:hashedPassword})
            return newUser
        }
        catch(error){
            throw new Error(`Usecase signup error ${error}`)
        }
    }
}

module.exports = new UserUseCase