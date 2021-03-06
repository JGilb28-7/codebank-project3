const mongoose = require("mongoose");
const db = require("../database/models/user");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codebank");
const userSeed = [
  {
    firstName: "Imogen",
    lastName: "Edwards",
    role: "Employee",
    phoneNumber: "179-998-3204",
    email: "imogen.edwards@example.com",
    age: 49,
    gender: "female",
    userName: "silversnake277",
    password: "clifford",
    date: new Date(Date.now()),
  },
  {
    firstName: "Melvin ",
    lastName: "Smith",
    role: "Employee",
    phoneNumber: "179-998-3204",
    email: "melvin.edwards@example.com",
    age: 49,
    gender: "male",
    userName: "blacksnake277",
    password: "password",
    date: new Date(Date.now()),
  },
  {
    firstName: "Anthony",
    lastName: "Edwards",
    role: "Employee",
    phoneNumber: "179-998-3204",
    email: "imogen.edwards@example.com",
    age: 49,
    gender: "male",
    userName: "silversnake277",
    password: "clifford",
    date: new Date(Date.now()),
  },
  {
    firstName: "Frank",
    lastName: "Edwards",
    role: "Employee",
    phoneNumber: "179-998-3204",
    email: "imogen.edwards@example.com",
    age: 49,
    gender: "male",
    userName: "snake2778",
    password: "tommytom",
    date: new Date(Date.now()),
  },
  {
    firstName: "Charlene ",
    lastName: "Edwards",
    role: "Employee",
    phoneNumber: "179-998-3204",
    email: "charlene.steeves@example.com",
    age: 49,
    gender: "female",
    userName: "silver123",
    password: "silver123",
    date: new Date(Date.now()),
  },
  {
    firstName: "Cathy",
    lastName: "Neal",
    role: "Customer",
    phoneNumber: "179-998-3204",
    email: "cathy.neal@example.com",
    age: 49,
    gender: "female",
    userName: "UserName",
    password: "clifford",
    date: new Date(Date.now()),
  },
  {
    firstName: "Kathrine ",
    lastName: "Lawson",
    role: "Customer",
    phoneNumber: "179-998-3204",
    email: "kathrine.edwards@example.com",
    age: 49,
    gender: "female",
    userName: "missLawson189",
    password: "password",
    date: new Date(Date.now()),
  },
  {
    firstName: "Joe;",
    lastName: "Pena",
    role: "Customer",
    phoneNumber: "179-998-3204",
    email: "joe.edwards@example.com",
    age: 49,
    gender: "male",
    userName: "silver277",
    password: "clifford",
    date: new Date(Date.now()),
  },
  {
    firstName: "Allan",
    lastName: "Fox",
    role: "Customer",
    phoneNumber: "179-998-3204",
    email: "allan.edwards@example.com",
    age: 49,
    gender: "male",
    userName: "snake2778",
    password: "tommytom",
    date: new Date(Date.now()),
  },
  {
    firstName: "Deann ",
    lastName: "Ford",
    role: "Customer",
    phoneNumber: "179-998-3204",
    email: "deann.steeves@example.com",
    age: 49,
    gender: "female",
    userName: "moosetracks456",
    password: "deannFord",
    date: new Date(Date.now()),
  },
];
db.User.remove({})
  .then(() => db.User.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = mongoose.connection;
