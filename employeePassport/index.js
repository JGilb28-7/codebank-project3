const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const Employee = require('../database/models/employee')
// const Employee = require('../database/models/employee')
passport.serializeUser((employee, done) => {
    done(null, { _id: employee._id})
})
passport.deserializeUser((id, done) => {
    console.log('DeserializeEmployee called')
    Employee.findOne(
        {_id: id},
        'username',
        (err, employee) => {
            console.log('*** Deserialize called, employee: '); // only for debugging to see result in terminal
            console.log(employee); // the whole raw employee object - only for debugging to see result in terminal
            done(null, employee)
        }
    )
})

// Use Strategies
passport.use(LocalStrategy);

module.exports = passport