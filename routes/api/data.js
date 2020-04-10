const router = require("express").Router();
const apiController = require("../../controllers/apiController");

router.route("/")
  // .get(apiController.findAll)
  .post(apiController.registerUser);

module.exports = router;