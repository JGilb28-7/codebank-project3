const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const employeeSchema = new Schema({
  firstName: { type: String},
  lastName: { type: String},
  role: { type: String},
  phoneNumber: { type: Number},
  email: { type: String},
  age: { type: Number},
  gender: { type: String},
  userName: { type: String},
  password: { type: String},

  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
});


// Defining Schema methods
employeeSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Defining hooks for pre-saving
employeeSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("NO PASSWORD PROVIDED");
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
