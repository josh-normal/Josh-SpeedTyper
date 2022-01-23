var express = require('express');
var router = express.Router();
const passport = require('passport')


router.get('/', isLoggedIn, function(req, res, next) {
  res.send("hello")
});

// Oauth authentication
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
  if (req.isAuthenticated()) {
    return res.redirect('/user')
  } else {
    return res.render('prompt')
  }
}

module.exports = router;