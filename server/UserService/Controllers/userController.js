const UserUseCase = require('../useCases/userUseCase')

class UserController{
    async signUp(req, res){
        try{
            const {userName, email, password} = req.body
            if(!userName || !email || !password){
                res.status(400).send('All fields are required')
            }

            const newUser = await UserUseCase.signupUser(userName, email, password)
            res.status(201).json(newUser)
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
            const {email, password} = req.body
            if(!email || !password){
                res.status(400).send('All fields are required')
            }
        }
        catch(error){

        }
    }
}

module.exports = new UserController