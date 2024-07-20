const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.SECRET
const refreshKey = process.env.REFRESH_SECRET

const generateToken = (user) => {
    return jwt.sign({id: user._id, email: user.email, role: user.role}, secretKey, {expiresIn: '1h'})
}

const verifyToken = (req, res, next) => {
   const token = req.header('Authorization').replace('Bearer', '').trim()
   if(!token){
        return res.status(401).json({error: 'Access denied, token missing'})
   }
   else{
        try{
            const verified = jwt.verify(token, secretKey)
            req.user = verified
            next()
        }
        catch(error){
            res.status(400).json({error: 'Token is not valid'})
        }
   }
}

const generateRefreshToken = (user) => {
    return jwt.sign({id: user._id, email: user.email, role: user.role}, refreshKey, {expiresIn: '7d'})
}

const verfiyRefreshToken = (refreshToken) => {
    try{
        return jwt.verify(refreshToken, refreshKey)
    }
    catch(error){
        throw new Error('Invalid refresh token')
    }
}

module.exports = {generateToken, verifyToken, generateRefreshToken, verfiyRefreshToken}