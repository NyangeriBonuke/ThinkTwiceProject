const axios = require("axios")

const generateToken = async(req, res, next) => {
    const consumerKey = process.env.CONSUMER_KEY
    const consumerSecret = process.env.CONSUMER_SECRET
    const auth = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")

    try{
        const response = await axios.get(`https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`, {
            headers: {
                authorization: `Basic ${auth}`
            }
        })
        req.token = response.data.access_token
        next()
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = { generateToken }