const UserUseCase = require('../useCases/userUseCase')

class UserController{
    async signUp(req, res){
        try{
            const {userName, email, password} = req.body
            if(!userName || !email || !password){
                res.status(400).send('Wrong credentials')
            }
            const newUser = await UserUseCase.signupUser(userName, email, password)
        }
        catch(error){
            throw new Error(`Controller signup error ${error}`)
        }
    }
}

module.exports = new UserController