const mongoose = require('mongoose')
const { Schema } = mongoose

const walletScheme = Schema({
    balance: {
        type: Number,
        require: false,
        default: 0
    },
    address: {
        type: String,
        required: false,
        index: true
    },
    coin: String,
    chainId: Number,
    transaction: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
})

module.exports = mongoose.model('Wallet', walletScheme)