const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codebank"
);
const userSeed = [
    {
        firstName: "Imogen",
        lastName: "Edwards",
        phoneNumber:"(179)-998-3204",
        email:"imogen.edwards@example.com",
        userName:"silversnake277",
        password:"clifford",
        date: new Date(Date.now())
      },
      {
        firstName: "Jessica",
        lastName: "Torres",
        phoneNumber:"016974 94194",
        email:"jessica.torres@example.com",
        userName:"2lazyelephant670",
        password:"2ticklish",
        date: new Date(Date.now())
      },
      {
        firstName: "Imogen",
        lastName: "Edwards",
        phoneNumber:"(179)-998-3204",
        email:"2imogen.edwards@example.com",
        userName:"2silversnake277",
        password:"2clifford",
        date: new Date(Date.now())
      },
      {
        firstName: "Jessica",
        lastName: "Gorres",
        phoneNumber:"016974 94194",
        email:"3jessica.gorres@example.com",
        userName:"3lazyelephant670",
        password:"3ticklish",
        date: new Date(Date.now())
      },
      ]
   db.User.remove({})
  .then(() => db.User.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });