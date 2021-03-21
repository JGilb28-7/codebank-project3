const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const Employee = require('../database/models/employee')
// const Employee = require('../database/models/employee')
passport.serializeUser((employee, done) => {
    done(null, { _id: employee._id})
})
passport.deserializeUser((id, done) => {
    Employee.findOne(
        {_id: id},
        'username',
        (err, employee) => {
            done(null, employee)
        }
    )
})

// Use Strategies
passport.use(LocalStrategy);

module.exports = passport