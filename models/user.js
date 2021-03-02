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
  middleInital: {
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

});

const User = mongoose.model("User", userSchema);

module.exports = User;
