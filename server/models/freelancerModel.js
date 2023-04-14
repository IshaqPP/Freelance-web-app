const mongoose = require("mongoose")

const freelancerSchema = new mongoose.Schema({
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

const Freelancer = mongoose.model("freelancer", freelancerSchema)
module.exports = { Freelancer }