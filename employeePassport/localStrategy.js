const LocalStrategy = require('passport-local').Strategy
const Employee = require('../database/models/employee')

const strategy = new LocalStrategy(
	{
		employeenameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		Employee.findOne({ username: username }, (err, employee) => {
			if (err) {
				return done(err)
			}
			if (!employee) {
				Employee.findOne({ username: username })
				.then(function (employee) {
					res.json(employee);
				})
				.catch(function (err) {
		
					console.log("Error:" + err)
				});
			}
			
			return done(null, employee)
		})
	}
)

module.exports = strategy;