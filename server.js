require("dotenv").config();

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const expfile = require("express-fileupload");
const session = require("express-session");
const MongosStore = require("connect-mongo")(session);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(expfile({ useTempFiles: true }));
const cloudinary = require("cloudinary").v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());

//sessions
app.use(
  session ({
    secret: 'craggy-horizon',
    resave: false, //required
    saveUninitialized: false, //required
    store: new MongosStore({mongooseConnection: mongoose.connection})
  })
)
app.use(passport.session());
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  // console.log('user', req.session.passport.user._id)
  return next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medisource");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
