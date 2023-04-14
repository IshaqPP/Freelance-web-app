const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    applied: {
        type: Boolean,
        default: false,
    },
    freelancer: {
        name: {
            type: String,
            required: function () {
                return this.applied;
            },
        },
    },
});

const Project = mongoose.model("project", projectSchema)
module.exports = { Project }