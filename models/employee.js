const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },

  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
