const express = require('express');
const debug = require('debug')('app:question-route.js');
const validate = require('../validator/question').validator;
const User = require('../models/user');
const router = express.Router();

router.get('/',auth, (req, res) => {
    
});
router.post('/',auth, (req, res) => {
    
});
router.put('/',auth, (req, res) => {
    
});
router.delete('/',auth, (req, res) => {
    
});

module.exports = router;