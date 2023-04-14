const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Client = mongoose.model("client", clientSchema)
module.exports = { Client }