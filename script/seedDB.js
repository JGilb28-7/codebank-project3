const mongoose = require("mongoose");

const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codebank");
userSeed = [
  {
    firstName: "Cathy",
    lastName: "Neal",
    role: "Customer",// or Employee
    roleID: "01", // Employee 02
    address: "17 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
    zip: "04090",
    phoneNumber: "179-998-3204",
    email: "cathy.neal@example.com",
    age: "21",
    taxId: "123121234",
    username: "username",
    password: "clifford",
    securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
    accountTpye1: "Checking",
    accountNum1: "43123456",
    accountBalance1: "5000.00",
    rate1:"0.00", //%
    accountTpye2: "Savings",
    accountNum2: "53123456",
    accountBalance2: "5000.00",
    rate2:"1.00", //%
    accountTpye3: "Investment",
    accountNum3: "63123456",
    accountBalance3: "25000.00",
    rate2:"3.00", //%
    date: new Date(Date.now()),
  },
  {
    firstName: "Kathrine ",
    lastName: "Lawson",
    role: "Customer",// or Employee
	  roleID: "01", // Employee 02
    address: "21 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
    zip: "04090",
    phoneNumber: "179-998-3204",
    email: "kathrine.edwards@example.com",
    age: "49",
    taxId: "123121235",
    username: "missLawson189",
    password: "password",
    securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
    accountTpye1: "Checking",
    accountNum1: "43123457",
    accountBalance1: "50.00",
    rate1:"0.00", //%
    accountTpye2: "Savings",
    accountNum1: "53123457",
    accountBalance2: "15000.00",
    rate2:"1.00", //%
    accountTpye3: "Savings",
    accountNum3: "63123457",
    accountBalance3: "15000.00",
    rate3:"3.00", //%
    date: new Date(Date.now()),
       },
  {
    firstName: "Joe;",
    lastName: "Pena",
    role: "Customer",// or Employee
	  roleID: "01", // Employee 02
    address: "17 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
	  zip: "04090",
    phoneNumber: "179-998-3204",
    email: "joe.edwards@example.com",
    age: "49",
    taxId: "123121236",
    username: "silver277",
    password: "clifford",
    securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
    accountTpye1: "Checking",
    accountNum1: "43123458",
    accountBalance1: "1550.00",
    rate1:"0.00", //%
    accountTpye2: "Savings",
    accountNum1: "53123458",
    accountBalance2: "1000.00",
    rate2:"1.00", //%
    accountTpye3: "Savings",
    accountNum3: "63123458",
    accountBalance3: "105000.00",
    rate3:"3.00", //%
	  date: new Date(Date.now()),
    },
  {
    firstName: "Allan",
    lastName: "Fox",
    role: "Customer",// or customer
    roleID: "01", // customer 02
    address: "15 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
    zip: "04090",
    phoneNumber: "179-998-3204",
    email: "allan.edwards@example.com",
    age: "49",
    taxId: "123121237",
    username: "snake2778",
    password: "tommytom",
    securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
    accountTpye1: "Checking",
    accountNum1: "43123459",
    accountBalance1: "150.00",
    rate1:"0.00", //%
    accountTpye2: "Savings",
    accountNum1: "53123459",
    accountBalance2: "1500.00",
    rate2:"1.00", //%
    accountTpye3: "Savings",
    accountNum3: "63123459",
    accountBalance3: "5000.00",
    rate3:"3.00", //%
    date: new Date(Date.now()),
      },
  {
    firstName: "Deann ",
    lastName: "Ford",
    role: "Customer",// or Employee
    roleID: "01", // Employee 02
    address: "17 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
    zip: "04090",
    phoneNumber: "179-998-3204",
    email: "deann.steeves@example.com",
    age: "49",
    taxId: "123121238",
    username: "moosetracks456",
    password: "deannFord",
    securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
    accountTpye1: "Checking",
    accountNum1: "43123460",
    accountBalance1: "11150.00",
    rate1:"0.00", //%
    accountTpye2: "Savings",
    accountNum1: "53123460",
    accountBalance2: "1500.00",
    rate2:"1.00", 
    accountTpye3: "Investment",
    accountNum3: "63123460",
    accountBalance3: "25000.00",
    rate3:"3.00", 
    date: new Date(Date.now()),
      },
	{
  	firstName: "Imogen",
    lastName: "Edwards",
    role: "Manager",
	  roleID: "02", // Employee 02/ Manager 03
    address: "17 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
	  zip: "04090",
   	phoneNumber: "179-998-3204",
    email: "imogen.edwards@codebank.com",
    age: "49",
    username: "silversnake277",
    password: "clifford",
   	securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
 	  accountTpye1: "Checking",
	  accountNum1: "43123461",
    accountBalance1: "11150.00",
    rate1:"0.00", //%
  	accountTpye2: "Savings",
 	  accountNum1: "53123461",
    accountBalance2: "1500.00",
    rate2:"1.00", //%
	  accountTpye3: "Investment",
 	  accountNum3: "63123461",
    accountBalance3: "25000.00",
    rate3:"0.00", 
    date: new Date(Date.now()),
    },   
  {
    firstName: "Melvin ",
    lastName: "Smith",
    role: "Employee",
	  roleID: "01", // Employee 02
    address: "17 Any Road",
    city: "Wells",
    state:"ME",  //Needs to be a state list
	  zip: "04090",
    phoneNumber: "179-998-3204",
    email: "melvin.edwards@example.com",
    age: "22",
    username: "blacksnake277",
    password: "password",
	  securityAns1: "Pete",
    securityAns2: "Car",
    initialDep: "1.00",
 	  accountTpye1: "Checking",
	  accountNum1: "43123462",
    accountBalance1: "1500.00",
    rate1:"0.00", 
    accountTpye2: "Savings",
    accountNum1: "53123462",
    accountBalance2: "1500.00",
    rate2:"0.00", 
    accountTpye3: "Investment",
    accountNum3: "63123462",
    accountBalance3: "25000.00",
    rate3:"0.00", 
    date: new Date(Date.now()),
  	},
  ];

  db.User.remove ({})
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