require('./config/database');
const Resources = require('./models/resources');
const User = require('./models/user');
const data = require('./data')


// const reset = Resources.deleteMany({})
// Promise.resolve(reset).then(function() {
//     return Resources.create(data.resources)
// }).then(function(result) {
//     process.exit();
// });

// Promise.resolve().then(function() {
//     User.findById("61e9f0262b7555aaa7405235", function(err, user) {
//         data.history.forEach(function(his) {
//             user.history.push(his)
//         })
//         user.save()
//     })
// }).then(function() {
//     return User.findById("61e9f0262b7555aaa7405235")
// }).then(function(result) {
//     console.log(result)
//     process.exit()
// })