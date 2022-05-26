const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
    },
    list:[
        {
            name: {
                type: String,
                ref: "positions"
            },
            quantity: {
                type: Number,
            },
            cost: {
                type: Number,
            },
            size: {
                type: String,
            },
        }
    ],
    user:{
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    img:{
        type: String,
    },
    name:{
        type: String,
    }
})


module.exports = mongoose.model('orders', orderSchema)