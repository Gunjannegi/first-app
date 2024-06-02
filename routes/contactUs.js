const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact')
router.get('/contactus',contactController.getContactForm)
router.post('/contactus', contactController.postContactDetails)
module.exports = router