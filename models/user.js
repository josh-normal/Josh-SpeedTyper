const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
    type: String,
    name: String,
    author: String,
    publish: Date,
    content: String,
});

const historySchema = new Schema({
    speed: Number,
    date: Date,
    source: [resourcesSchema],
})

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    history: [historySchema],
})


module.exports = {
    Resources: mongoose.model('Resources', resourcesSchema),
    User: mongoose.model('User', userSchema),
}


