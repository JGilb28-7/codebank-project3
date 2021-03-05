// Need to add in the User Schema
const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise;

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,

  },
  lastName: {
    type: String,

  },
  email: {
    type: String,

    //JSG - add validation for email 
    //https://www.w3resource.com/javascript/form/email-validation.php
    /*function ValidateEmail(inputText)
    {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
    {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }
    }*/
  },
 // taxID: {
   // type: Number,
    //required: true
    // format Max 9 digits 000-00-0000
    // needs to turn to stars as being typed
    // acts as unique ID to call up a user 
 // },
 /* street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }, 
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },*/
  phoneNumber: {
    type: String,
    
  },
 
  username: {
    type: String,
  
  },
  password: {
    type: String,

  },
  /*securityAns1: {
    type: String,
    required: true
  },
  securityAns2: {
    type: String,
    required: true
  },*/

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
