var express = require('express');
var router = express.Router();


const userCtr = require('../controllers/user')


router.get('/', isLoggedIn, userCtr.home);
router.get('/practice', isLoggedIn, userCtr.practice);
router.get('/history', isLoggedIn, userCtr.history);
router.get('/resources', isLoggedIn, userCtr.renderAll);
router.get('/resources/add', isLoggedIn, userCtr.addForm);
router.get('/resources/:id/show', isLoggedIn, userCtr.show);
router.get('/resources/:id/edit', isLoggedIn, userCtr.editForm);
router.get('/review', isLoggedIn, userCtr.reviewSpeed)

router.post('/practice', isLoggedIn, userCtr.addHistory)
router.post('/resources', isLoggedIn, userCtr.addOne)
router.post('/resources/:id/edit', isLoggedIn, userCtr.edit);


router.delete('/resources/:id/show', isLoggedIn, userCtr.deleteThis);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    let x = setTimeout(() => {
        res.redirect('/')
    }, 5000)
}


module.exports = router;