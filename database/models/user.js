const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new mongoose.Schema({
  firstName: { type: String},
  lastName: { type: String},
  email: { type: String},
  age: { type: Number},
  taxId: { type: Number },
  role: { type: String,  default: "user" },
  roleID: { type: Number},
  address1: { type: String},
  address2: { type: String},
  city: { type: String},
  state: { type: String},
  zip: { type: Number},
  phoneNumber: { type: String},
  username: { type: String },
  password: { type: String },
  securityAns1: { type: String,},
  securityAns2: { type: String},
  initialDep: {type: Number },
  accountType: { type: String },
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
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
      default: 0
    },
  ],
});

// Defining Schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Defining hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("NO PASSWORD PROVIDED");
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
