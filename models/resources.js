const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
    type: String,
    name: String,
    author: String,
    publish: Date,
    content: String,
});


module.exports = mongoose.model('Resources', resourcesSchema)