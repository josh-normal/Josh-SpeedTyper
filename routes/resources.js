var express = require('express');
var router = express.Router();

const resourcesCtr = require('../controllers/resources')

/* GET users listing. */
router.get('/', resourcesCtr.renderAll);
// ('/show/:id', resourcesCtr.show) BELOW
router.get('/show', resourcesCtr.show);
router.get('/add', resourcesCtr.addForm);
// ('/show/:id/edit', resourcesCtr.show) BELOW
router.get('/show/edit', resourcesCtr.editForm);

router.post('/add', resourcesCtr.add)
router.post('/show/:id/edit', resourcesCtr.edit);

router.delete('/show/:id', resourcesCtr.deleteThis);

module.exports = router;