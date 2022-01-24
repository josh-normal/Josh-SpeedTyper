require('./config/database');
const User = require('./models/user');
const data = require('./data')



// Promise.resolve().then(function() {
//     User.findById("61eb5d7dedf230a47745613c", function(err, user) {
//         data.resources.forEach(function(source) {
//             user.resources.push(source)
//         })
//         user.save()
//     })
// }).then(function() {
//     return User.findById("61eb5d7dedf230a47745613c")
// }).then(function(result) {
//     console.log(result)
//     process.exit()
// })