require('dotenv').config()
const secretKey = process.env.SECRET

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer', '').trim()
    if(!token){
        return res.status(401).json({error: 'Access denied, token missing'})
    }
    else{
        try{    
            const verified = jwt.verify(secretKey, token)
            req.user = verified
            next()
        }
        catch(error){
            res.status(400).json({error: 'Token is not valid'})
        }
    }
}

const verifyAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(403).json({error: 'Access denied, admin role required'})
    }
}

module.exports = { verifyToken, verifyAdmin }