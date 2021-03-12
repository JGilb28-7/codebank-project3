// this is route.js file

const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

// route for signing-up a new user
router.post('/', (req, res) => {
    console.log('user signup')

    const { username, password } = req.body;

    // check to see that new user does not exists in the database and also there's no error while creating the new user
    // Only after these two checks save the user in the database
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js posting error: ', err);
        } else if (user) {
                res.json({
                    error: `Sorry, that username already exists with ${username}`
                })
            } else {
                const newUser = new User({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if(err) return res.json(err)
                    res.json(savedUser)
                })
            }
    })
})

// For logging-in a user who is already signed-up
router.post('/login',
    (req, res, next) => {
        console.log('routes/user.js, login, the value of req.body is: ') // line only for debugging for me
        console.log(req.body)
        /* the above is only for debugging and will print in the terminal -  { username: 'rohanpaul2@gmail.com', password: '123456' }  */
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('loggedin', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo)
    }
)

// Only a get route to see the user
router.get('/', (req, res, next) => {
    console.log('*****user*****')
    console.log(req.user) ;
    if (req.user) {
        res.json({user: req.user})
    } else {
        res.json({user: null})
    }
})

router.get('/host', (req, res, next) => {
    console.log('*****user*****')
    console.log(req.user) ;
})

router.post('/host', (req, res) => {
    if (req.user) {
        res.send({ msg: 'loggging out' })
    } else {
        res.send({msg: 'no user to logout'})
    }
})

// route for logging out the user. So this router will handle axios.post('/user/logout') request coming from client
router.post('/logout', (req, res) => {
    if (req.user) {
        res.send({ msg: 'loggging out' })
    } else {
        res.send({msg: 'no user to logout'})
    }
})

module.exports = router;

