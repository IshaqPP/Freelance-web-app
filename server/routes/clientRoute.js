const express = require('express');
const clientController = require('../controller/clientController');
const router = express.Router()

router.get('/', clientController.home)
router.post('/client-signup', clientController.clientSignup)
router.post('/client-login', clientController.clientLogin)
router.post('/new-project', clientController.newProject)

module.exports = router;
