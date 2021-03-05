const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')
passport.serializeUser((user, done) => {
    done(null, { _id: user._id})
})

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
    )
})

// Use Strategies
passport.use(LocalStrategy);

module.exports = passport