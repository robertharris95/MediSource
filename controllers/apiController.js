const db = require("../models");

module.exports = {
    getDB: function(req, res) {
        db.Post
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    session: function (req, res, next) {
       console.log('====== user!! =====')
       console.log(req.session.passport.user);
       if (req.session.passport.user) {
           res.json({ user: req.session.passport.user._id })
       }
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
    },
    
    newPost: function(req, res){
        db.Post
            .create(req.body)
            .then(dbPost => db.User.findOneAndUpdate({ _id: req.params.id }, { postrel: dbPost._id }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
}