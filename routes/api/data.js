const router = require("express").Router();
const apiController = require("../../controllers/apiController");

router.route("/")
  .get(apiController.getDB)
  .post(apiController.registerUser)
  .post(apiController.loginAttempt)

module.exports = router;