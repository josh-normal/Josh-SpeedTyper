const User = require('../models/user')
const Resources = require('../models/resources');
const { populate } = require('../models/user');

module.exports = {
    practice,
    history,
}

function practice(req, res) {
    res.render('practice')
}

function history(req, res) {
    User.findById(req.user.id).populate('history.source').exec(function(err, user) {
        if (err) return next(err);
        res.render('history', { user, visitor: req.user, });
    })
}