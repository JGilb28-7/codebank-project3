const router = require("express").Router();
const db = require("../models");
const User = require("../models/user");

router.get("/recipes", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.User.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(user => res.json(User))
    .catch(err => res.status(422).end());
});

module.exports = router;