const MpesaRepository = require('../repository/mpesaRepository')

class MpesaUseCase{
    async createMpesaData(mpesaData){
        try{
            const response = await MpesaRepository.createData(mpesaData)
            return response
        }
        catch(error){
            throw new Error(`Usecase create mpesa data error ${error}`)
        }
    }
}

module.exports = new MpesaUseCase