var express = require('express');
var router = express.Router();
const passport = require('passport')
const User = require('../models/user')
const indexCtr = require('../controllers/index')


router.get('/', function(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  User.find(modelQuery).exec(function(err, user) {
    if (err) return next(err);
    res.render('index', { user, visitor: req.user, });
  })
});

/* GET users listing. */
router.get('/practice', indexCtr.practice);
router.get('/history', isLoggedIn, indexCtr.history);




router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/',
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

module.exports = router;
