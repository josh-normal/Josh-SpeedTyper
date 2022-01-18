var express = require('express');
var router = express.Router();

const resourcesCtr = require('../controllers/resources')

/* GET users listing. */
router.get('/', resourcesCtr.renderAll);
router.get('/show/:id', resourcesCtr.show);
router.get('/add', resourcesCtr.addForm);
router.get('/show/:id/edit', resourcesCtr.editForm);

router.post('/add', resourcesCtr.add)
router.post('/show/:id/edit', resourcesCtr.edit);

router.delete('/show/:id', resourcesCtr.deleteThis);

module.exports = router;