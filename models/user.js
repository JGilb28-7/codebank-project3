// Need to add in the User Schema

const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
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
    required: true
  },
 
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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

const User = mongoose.model("User", userSchema);
module.exports = User;
