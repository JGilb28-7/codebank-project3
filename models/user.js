// Need to add in the User Schema

const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  firstName: {
    type: text,
    required: true
  },
  lastName: {
    type: text,
    required: true
  },
  email: {
    type: text,
    required: true
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
  taxID: {
    type: Number,
    required: true
    // format Max 9 digits 000-00-0000
    // needs to turn to stars as being typed
    // acts as unique ID to call up a user 
  },
  street: {
    type: text,
    required: true
  },
  city: {
    type: text,
    required: true
  }, 
  state: {
    type: text,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  phone: {
    type: text,
    required: true
  },
  cellPhone: {
    type: Number,
    required: true
  },
  userId: {
    type: text,
    required: true
  },
  password: {
    type: text,
    required: true
  },
  securityAns1: {
    type: text,
    required: true
  },
  securityAns2: {
    type: text,
    required: true
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
