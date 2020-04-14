const db = require("../models");

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
    }
}