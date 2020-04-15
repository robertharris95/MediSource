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

const postSeed = [
    {
        image: "https://picsum.photos/200/300",
        user: "John Doe",
        body: "When I was a young Warthog"
    },
    {
        image: "https://picsum.photos/400/300",
        user: "Cloud",
        body: "And this is why they've ruined me forever"
    },
    {
        image: "https://picsum.photos/600/800",
        user: "Ad",
        body: "10 EASY STEPS TO BECOME A WEB DEVELOPER!"
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
      console.log(data.result.n + " records inserted.");
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });

db.Entity
  .remove({})
  .then(() => db.Entity.collection.insertMany(entitySeed))
  .then(data => {
      console.log(data.result.n + " records inserted.");
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });

db.Post
.remove({})
.then(() => db.Post.collection.insertMany(postSeed))
.then(data => {
    console.log(data.result.n + " records inserted.");
})
.catch(err => {
    console.error(err);
    process.exit(1);
});