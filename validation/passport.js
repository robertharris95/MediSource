var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

console.log("you are here");
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    {
      usernameField: "username"
    },
    function(username, password, done) {
      db.User
        .findOne({ username: username }, (err, user) => {
          if (err){
            return done(err)
          }
          if(!user) {
            return done(null, false, { message: 'Incorrect username' })
          }
          if (!user.checkPassword(password)) {
            return done(null, false, { message: 'Incorrect password'})
          }
          return done(null, user)
        })
    }
  )
);

passport.serializeUser(function(user, cb) {
  console.log(user);
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;