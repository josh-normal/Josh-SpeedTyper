const User = require('../models/user')
const Resources = require('../models/resources')

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
    const array = [{ name: 'The Matrix', author: 'Josh', publish: '2019-05-10'}]
    res.render('resources/resources', { array })
}

function show(req, res) {
    const source = { type: 'movie', name: 'The Matrix', author: 'Josh', publish: '2019-05-10'}
    res.render('resources/show', { source })
}

function addForm(req, res) {
    res.render('resources/add')
}

function editForm(req, res) {
    const source = { type: 'movie', name: 'The Matrix', author: 'Josh', publish: '2019-05-10'}
    res.render('resources/edit', { source })
}

function edit(req, res) {
    res.redirect('/resources/show')
}

function deleteThis(req, res) {
    
}

function add(req, res) {
    res.redirect('/resources/show')
}