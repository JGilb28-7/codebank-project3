const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

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