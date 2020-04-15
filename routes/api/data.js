const router = require("express").Router();
const apiController = require("../../controllers/apiController");
const passport = require("../../validation")

router.route("/")
  .get(apiController.getDB)
  .post(passport.authenticate('local')
  ,(req, res) => {
      console.log('logged in', req.body.username);
      var userInfo = {
          username: req.body.username
      };
      res.send(userInfo);
})

router.route("/new")
  .post(apiController.registerUser);

//   .post(function (req, res, next) {
//     console.log('routes/user.js, login, req.body: ');
//     console.log(req.body)
//     next()
//   },
//   (a, b, next) => {
//     console.log("I'm here")
//     passport.authenticate('local')
//     next()
//   },
//   (req, res) => {
//       console.log('logged in', req.body.username);
//       var userInfo = {
//           username: req.body.username
//       };
//       res.send(userInfo);
// })

module.exports = router