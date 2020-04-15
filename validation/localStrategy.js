var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
  const strategy = new LocalStrategy(
    {
      usernameField: "username"
    },
    function(username, password, done) {
      db.User
        .findOne({ username: username }, (err, user) => {
          if (err){
            console.log("errors suxk")
            return done(err)
          }
          if(!user) {
            console.log("waddup brutha")
            return done(null, false, { message: 'Incorrect username' })
          }
          if (!user.checkPassword(password)) {
            console.log("gomenasorry")
            return done(null, false, { message: 'Incorrect password'})
          }
          console.log(user)
          return done(null, user)
        })
    }
  )

// Exporting our configured passport
module.exports = strategy;