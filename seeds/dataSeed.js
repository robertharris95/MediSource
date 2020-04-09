const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/medisource"
);

const userSeed = [
    {
        name: "admin",
        username: "admin",
        password: "password",
        date: new Date(Date.now())
    }
];

const entitySeed = [
    {
        name: "St. Louis",
        location: "444 Park St."
    },
    {
        name: "St. Peter",
        location: "555 Lonk Stronk"
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
      console.log(data.result.n + " records inserted.")
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });

db.Entity
  .remove({})
  .then(() => db.Entity.collection.insertMany(entitySeed))
  .then(data => {
      console.log(data.result.n + " records inserted.")
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });