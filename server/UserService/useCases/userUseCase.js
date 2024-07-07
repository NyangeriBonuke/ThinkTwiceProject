const userRepository = require('../repositories/userRepository')
const UserRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt')
const { generateToken } = require('../Utils/jwtUtils')

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
            return { user: newUser, token: generateToken(newUser) }
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
            return { user, token: generateToken(user) }
        }
        catch(error){
            throw new Error(`Usecase login error ${error}`)
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
}

module.exports = new UserUseCase