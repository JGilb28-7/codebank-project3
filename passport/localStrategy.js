const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy
const Employee = require('../database/models/employee')

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				Employee.findOne({ username: username })
				.then(function (employee) {
					res.json(employee);
				})
				.catch(function (err) {
		
					console.log("Error:" + err)
				});
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy;