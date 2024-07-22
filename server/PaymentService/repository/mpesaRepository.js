const Mpesa = require('../controllers/mpesaController')

class MpesaRepository{
    async createData(mpesaData){
        try{
            const newMsg = await Mpesa.create(mpesaData)
            return newMsg
        }
        catch(error){
            throw new Error(`Repo create data error: ${error}`)
        }
    }
}

module.exports = new MpesaRepository