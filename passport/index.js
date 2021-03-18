const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')
const Employee = require('../database/models/employee')
// const Employee = require('../database/models/employee')
passport.serializeUser((user, done) => {
    done(null, { _id: user._id})
})

// passport.serializeUser((employee, done) => {
//     done(null, { _id: employee._id})
// })

// passport.deserializeUser((id, done) => {
//     console.log('DeserializeUser called')
//     Employee.findOne(
//         {_id: id},
//         'username',
//         (err, employee) => {
//             console.log('*** Deserialize called, Emp: '); // only for debugging to see result in terminal
//             console.log(employee); // the whole raw user object - only for debugging to see result in terminal
//             done(null, employee)
//         }
//     )
// })

passport.deserializeUser((id, done) => {
    console.log('DeserializeUser called')
    User.findOne(
        {_id: id},
        'username',
        (err, user) => {
            console.log('*** Deserialize called, user: '); // only for debugging to see result in terminal
            console.log(user); // the whole raw user object - only for debugging to see result in terminal
            done(null, user)
        }
    ).then((user) => {
    if (!user) {
        Employee.findOne(
            {_id: id},
            'username',
            (err, employee) => {
                console.log(employee);
                done(null, employee)
            }
        )
    }
    })
})

// Use Strategies
passport.use(LocalStrategy);

module.exports = passport