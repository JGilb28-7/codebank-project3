const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise;

const userSchema = new mongoose.Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  taxId: { type: Number }, 
  role: { type: String, required: true },
  roleID: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true }, 
  state: { type: String, required: true },
  zip: { type: Number, required: true},
  phoneNumber: { type: String, required: true },
  username: { type: String, },
  password: { type: String, required: true},
  securityAns1: { type: String, required: true },
  securityAns2: { type: String, required: true },
  accountTpye1: { type: String },
  accountNum1: { type: Number },
  accountBalance1: { type: Number },
  rate1: { type: Number },
  accountTpye2: { type: String },
  accountNum2: { type: Number },
  accountBalance2: { type: Number },
  rate2: { type: Number },
  accountTpye3: { type: String },
  accountNum3: { type: Number },
  accountBalance3: { type: Number },
  rate3: { type: Number },
});

// Defining Schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Defining hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('NO PASSWORD PROVIDED')
		next()
	} else {
		console.log('hashPassword in pre save');
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", userSchema);
module.exports = User;
