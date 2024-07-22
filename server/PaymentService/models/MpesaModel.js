const mongoose = require('mongoose')

const MpesaSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
        trim: true
    },
    mpesaReceiptNumber: {
        type: String,
        required: true,
        trim: true
    },
    transactionDate: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Mpesa', MpesaSchema)