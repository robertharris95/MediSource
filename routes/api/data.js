const router = require("express").Router();
const apiController = require("../../controllers/apiController");

router.route("/")
  .get(apiController.getDB)
  .post(apiController.registerUser);

module.exports = router;