const { Freelancer } = require('../models/freelancerModel');
const { Project } = require('../models/projectModel');
module.exports = {

    freelancerSignup: async (req, res) => {
        try {
            const existingFreelancer = await Freelancer.findOne({ email: req.body.email })
            if (existingFreelancer) {
                return res.status(409).send({ message: "Freelancer with given email already Exist!" });
            }
            const newFreelancer = await Freelancer.create(req.body)
            return res.status(201).json(newFreelancer)
        } catch (error) {
            return res.status(500).send({ message: "Freelancer signup failed...!" })
        }
    },

    freelancerLogin: async (req, res) => {
        try {
            const existingFreelancer = await Freelancer.findOne({ email: req.body.email })
            if (!existingFreelancer) {
                return res.status(400).send({ message: "Freelancer credentials are wrong..!" });
            }
            if (existingFreelancer.password !== req.body.password) {
                return res.status(400).send({ message: "Freelancer credentials are wrong..!" });
            }
            return res.status(201).json(existingFreelancer)
        } catch (error) {
            return res.status(500).send({ message: "Freelancer signup failed...!" })
        }
    },

    freelancerHome: async (req, res) => {
        try {
            const response = await Project.find()
            return res.status(201).send(response)
        } catch (error) {
            return res.status(500).send({ message: "Home Failed...!" })
        }
    },

    freelancerApply: async (req, res) => {
        const id = req.query.id;
        const freelancerName = req.body.username;
        try {
            const project = await Project.findOneAndUpdate(
                { _id: id },
                {
                    applied: true,
                    $set: {
                        freelancer: { name: freelancerName }
                    }
                },
                { new: true }
            );
            return res.status(201).send(project);
        } catch (error) {
            console.error(error);   
            return res.status(500).send({ message: "Home Failed...!" });
        }
    },
}
