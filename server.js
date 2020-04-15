const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());

//sessions
app.use(
  session ({
    secret: 'craggy-horizon',
    resave: false, //required
    saveUninitialized: false //required
  })
)
app.use(passport.session());
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://username:password1@ds157276.mlab.com:57276/heroku_fk5k08f3");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
