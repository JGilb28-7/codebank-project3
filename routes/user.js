const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const Employee = require('../database/models/employee')
const passport = require('../passport');
const Transaction = require('../database/models/Transaction')

// route for signing-up a new user
router.post('/', (req, res) => {
    console.log('user signup')

    const { firstName,
        lastName,
        email,
        age,
        address1,
        address2,
        city,
        state,
        zip,
        phoneNumber,
        accountType,
        initialDep,
        username,
        password } = req.body;

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js posting error: ', err);
        } else if (user) {
            res.json({
                error: `Sorry, that username already exists with ${username}`
            })
        } else {
            const newUser = new User({
                firstName: firstName,
                lastName:lastName,
                email: email,
                age: age,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zip: zip,
                phoneNumber: phoneNumber,
                accountType: accountType,
                initialDep: initialDep,
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/admin/signup', (req, res) => {
    console.log('employee signup')

    const { firstName,
        lastName,
        phoneNumber,
        email,
        role,
        age,
        gender,
        username,
        password } = req.body;

    Employee.findOne({ username: username }, (err, employee) => {
        if (err) {
            console.log('Employee.js posting error: ', err);
        } else if (employee) {
            res.json({
                error: `Sorry, that username already exists with ${username}`
            })
        } else {
            const newEmployee = new Employee({
                firstName: firstName,
                lastName:lastName,
                phoneNumber: phoneNumber,
                email: email,
                role: role,
                age: age,
                gender: gender,
                username: username,
                password: password
            })
            newEmployee.save((err, savedEmployee) => {
                if (err) return res.json(err)
                res.json(savedEmployee)
            })
        }
    })
})

// For logging-in a user who is already signed-up
router.post('/login',
    (req, res, next) => {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('loggedin', req.user);
        var userInfo = {
            username: req.user.username,
            id: req.user._id,
        };
     
        res.send(userInfo)
    }
)

router.post('admin/login',
    (req, res, next) => {
        console.log(req.body)
        next()
    }
)

// Only a get route to see the user


router.get('/host/:id', (req, res, next) => {

    User.findById(req.user._id)
        .then(function (users) {
            res.json(users);
            console.log("ID: " + req.user._id)
        })
        .catch(function (err) {

            console.log("Error:" + err)
        });
})


router.post('/host', (req, res) => {
    if (req.user) {
        res.send({ msg: 'loggging out' })
    } else {
        res.send({ msg: 'no user to logout' })
    }
})

router.get('/admin', (req, res, next) => {

    Employee.find(
        {}
    )
        .then(function (employees) {
            res.json(employees);
            console.log("Employee" + employees)
        })
        .catch(function (err) {
        });
})

router.post('/test',
    (req, res) => {
           User.findById("6051822ef5aade6a18c1f3df")
        //    .populate("transactions")
           .then(function (test) {
               res.json(test)
           })
    }
)

router.post("/transactions", ({body}, res) => {
    Transaction.create({name: body.name, value: body.value})
      .then(({ _id }) => User.findOneAndUpdate({_id: body._id}, { $push: { transactions: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.get('/transactions/:id', ({body}, res) => {
    Transaction.findById({_id: body._id}) //
        .then(function (trans) {
            res.json(trans);
            console.log("transactions" + trans)
        })
        .catch(function (err) {

            console.log("Error:" + err)
        });
})


// route for logging out the user. So this router will handle axios.post('/user/logout') request coming from client
router.post('/logout', (req, res) => {
    if (req.user) {
        res.send({ msg: 'loggging out' })
    } else {
        res.send({ msg: 'no user to logout' })
    }
})

router.get('/', (req, res, next) => {
    console.log('*****user*****')
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

module.exports = router;