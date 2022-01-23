const User = require('../models/user')
const data = require('../data')

module.exports = {
    home,
    practice,
    history,
    renderAll,
    show,
    addForm,
    editForm,
    edit,
    deleteThis,
    addOne,
    addHistory,
}

function home(req, res, next) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        if (!user.returnUser) {
            data.resources.forEach(function(source) {
                user.resources.push(source)
            })
            user.returnUser = true;
            user.save();
        }
        res.render('index', { user, visitor: req.user, });
    })
}


function practice(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = Math.floor(Math.random()*user.resources.length);
        res.render('practice', { source: user.resources[index], user, visitor: req.user, })
    })
}

function history(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let histories = []
        let history = {}
        user.resources.forEach(function(source) {
            source.history.forEach(function(his) {
                history.sourceType = source.type;
                history.sourceName = source.name;
                history.speed = his.speed;
                history.when = his.when;
                histories.push(history)
                history = {}
            })
        })
        histories.sort((a, b) => b.when - a.when)
        let historyWhen = histories.slice(0, 21)
        histories.sort((a, b) => b.speed - a.speed)
        let historySpeed = histories.slice(0, 21)
        res.render('history', { user, visitor: req.user, historySpeed, historyWhen, });
    })
}

function renderAll(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        res.render('resources', { user, visitor: req.user, })
    })
}

function show(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = user.resources.findIndex(source => source.id == req.params.id);
        res.render('show', { source: user.resources[index], user, visitor: req.user, })
    })
}

function addForm(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        res.render('add', { user, visitor: req.user, })
    })
}

function editForm(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = user.resources.findIndex(source => source.id == req.params.id);
        res.render('edit', { source: user.resources[index], user, visitor: req.user, })
    })
}

function edit(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = user.resources.findIndex(source => source.id == req.params.id);
        user.resources[index].type = req.body.type
        user.resources[index].name = req.body.name
        user.resources[index].author = req.body.author
        user.resources[index].publish = req.body.publish
        user.resources[index].content = req.body.content
        user.save()
        res.redirect(`/user/resources/${req.params.id}/show`)
    })
}

function deleteThis(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = user.resources.findIndex(source => source.id == req.params.id);
        user.resources.splice(index, 1)
        user.save()
        res.redirect('/user/resources')
    })
}

function addOne(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        user.resources.push(req.body)
        user.save()
        res.redirect('/user/resources')
    })
}

function addHistory(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        let index = user.resources.findIndex(source => {
            return source.id == req.body.sourceid
        })
        const obj = {
            speed: req.body.speed,
            when: new Date(),
        }
        user.resources[index].history.push(obj)
        user.save()
        console.log(user)
        res.redirect('/user/practice')
    })
}