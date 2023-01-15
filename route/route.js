const express = require('express');

const router = express.Router();

const{signUp} = require('../controller/controller')

router
    .route('/users')
    .post(signUp)

    module.exports = router;