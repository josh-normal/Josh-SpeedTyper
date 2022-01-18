const model = require('../models/user')
const User = model.User;
const Resources = model.Resources;

module.exports = {
    practice,
    history,
}

function practice(req, res) {
    res.render('user/practice')
}

function history(req, res) {
    res.render('user/history')
}