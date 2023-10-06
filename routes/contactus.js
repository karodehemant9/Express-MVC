const express = require('express');
const path = require('path');
const router = express.Router();

//const rootDir = require('../util/path.js');

const contactController = require('../controllers/contact.js');
const successController = require('../controllers/success.js');




router.get('/contactus', contactController.addContactDetails);

router.post('/success', successController.getSuccess);


module.exports = router;