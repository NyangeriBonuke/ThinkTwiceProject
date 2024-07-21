const axios = require('axios')
require('dotenv').config()

class MpesaController{
    async stkPush(req, res){
        const {phone, amount} = req.body
        const token = req.token

        const phoneNumber = phone.substring(1)
        const timestamp = new Date().toISOString().replace(/[-T:]/g,"").split(".")[0]
        const passKey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
        const businessShortCode = '174379'
        const password = new Buffer.from(businessShortCode + passKey + timestamp).toString("base64")
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

        const data = {    
            BusinessShortCode: businessShortCode,    
            Password: password,    
            Timestamp: timestamp,    
            TransactionType: "CustomerPayBillOnline",    
            Amount: amount,    
            PartyA: `254${phoneNumber}`,    
            PartyB: businessShortCode,    
            PhoneNumber: `254${phoneNumber}`,    
            CallBackURL: "https://c4eb-41-90-182-73.ngrok-free.app",    
            AccountReference: `254${phoneNumber}`,    
            TransactionDesc: "Test"
        }

        try{
             const response = await axios.post(url, data, {
                headers: {Authorization: `Bearer ${token}`}
             })
             res.status(200).json(response.data)
        }
        catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new MpesaController