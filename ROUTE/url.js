const express = require('express');
const {handleGenerateNewShortURL, handlegenerateNewShortURL} = require('../controller/url')
const router = express.Router();


router.post('/', handlegenerateNewShortURL);

module.exports = router;
