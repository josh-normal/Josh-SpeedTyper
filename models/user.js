const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = new Schema({
    speed: Number,
    time: Date,
    source: {type: Schema.Types.ObjectId, ref: 'Resources'},
})

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    history: [historySchema],
    googleId: String,
})


module.exports = mongoose.model('User', userSchema)