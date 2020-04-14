const db = require("../models");
// const passport = require("../validation")
module.exports = {
    getDB: function(req, res) {
        db.Post
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    registerUser: function(req, res) {
        db.User
          .insertMany(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    loginAttempt: function(req, res) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      passport.authenticate('local'),
      (req, res) => {
          console.log('logged in', req.user);
          var userInfo = {
              username: req.user.username
          };
          res.send(userInfo);
      }
    }
}