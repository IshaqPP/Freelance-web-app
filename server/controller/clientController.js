const { Client } = require('../models/clientModel');
const { Project } = require('../models/projectModel');
module.exports = {

    clientSignup: async (req, res) => {
        try {
            const existingClient = await Client.findOne({ email: req.body.email })
            if (existingClient) {
                return res.status(409).send({ message: "Client with given email already Exist!" });
            }
            const newClient = await Client.create(req.body)
            return res.status(201).json(newClient)
        } catch (error) {
            return res.status(500).send({ message: "Client signup failed...!" })
        }
    },

    clientLogin: async (req, res) => {
        try {
            const existingClient = await Client.findOne({ email: req.body.email })
            if (!existingClient) {
                return res.status(400).send({ message: "Client credentials are wrong..!" });
            }
            if (existingClient.password !== req.body.password) {
                return res.status(400).send({ message: "Client credentials are wrong..!" });
            }
            return res.status(201).json(existingClient)
        } catch (error) {
            return res.status(500).send({ message: "Client signup failed...!" })
        }
    },

    newProject: async (req, res) => {
        try {
            await Project.create(req.body)
            return res.status(201).send({ message: "Success..!" })
        } catch (error) {
            return res.status(500).send({ message: "New Project Failed...!" })
        }
    },

    home: async (req, res) => {
        try {
            const response = await Project.find()
            return res.status(201).send(response)
        } catch (error) {
            return res.status(500).send({ message: "Home Failed...!" })
        }
    }
}