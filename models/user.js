const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const historySchema = new Schema({
    speed: Number,
    when: Date,
});

const resourcesSchema = new Schema({
    type: String,
    name: String,
    author: String,
    publish: Date,
    content: String,
    history: [historySchema],
});

const userSchema = new Schema({
    returnUser: Boolean,
    firstname: String,
    email: String,
    resources: [resourcesSchema],
    googleId: String,
});





module.exports = mongoose.model('User', userSchema)