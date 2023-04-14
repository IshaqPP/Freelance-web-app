const express = require('express');
const freelanceController = require('../controller/freelanceController');
const router = express.Router()

router.post('/freelancer-signup', freelanceController.freelancerSignup)
router.post('/freelancer-login', freelanceController.freelancerLogin)
router.get('/freelancer-home', freelanceController.freelancerHome)
router.put('/freelancer-apply', freelanceController.freelancerApply)

module.exports = router;
