const userRepository = require('../repositories/userRepository')
const UserRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt')

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
            return newUser
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
            const isUser = await bcrypt.compare(password, user.password)
            if(!isUser){
                throw new Error('Wrong Credentials')
            }
            return isUser
        }
        catch(error){
            throw new Error(`Usecase login error ${error}`)
        }
    }
}

module.exports = new UserUseCase