const db = require("../models");
// const passport = require("../passport");

module.exports = {
    getDB: function(req, res) {
        db.Post
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    registerUser: function(req, res) {
        console.log("user signup");
        const { name, username, password } = req.body

        db.User
          .findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new db.User({
                    name: name,
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        })
    },

    loginAttempt: function(req, res) {
      console.log('logged in', req.body);
      var userInfo = {
          username: req.body.username
      };
      res.send(userInfo);
    }
}