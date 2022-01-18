var express = require('express');
var router = express.Router();

const userCtr = require('../controllers/user')

/* GET users listing. */
router.get('/practice', userCtr.practice);
router.get('/history', userCtr.history);


module.exports = router;