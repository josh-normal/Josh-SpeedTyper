const model = require('../models/user')
const User = model.User;
const Resources = model.Resources;

module.exports = {
    renderAll,
    show,
    addForm,
    editForm,
    edit,
    deleteThis,
    add,
}


function renderAll(req, res) {
    const array = [{ name: 'this project', author: 'Josh'}]
    res.render('resources/resources', { array })
}

function show(req, res) {
    res.render('resources/show', { about: req.params.id })
}

function addForm(req, res) {
    res.render('resources/add')
}

function editForm(req, res) {
    const object = { name: 'this project', author: 'Josh'}
    res.render('resources/edit', { object })
}

function edit(req, res) {
    res.redirect('/resources/show')
}

function deleteThis(req, res) {
    
}

function add(req, res) {
    res.redirect('/resources/show')
}