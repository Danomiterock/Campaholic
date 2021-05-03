const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campaholicdb"
);

const PostSeed = [{
    username: "Triston Burns",
    location: "Picacho Peak",
    description: "Hiking on the Picacho Peak Trail!",
    activities: ["Hiking", "Camping"],
    friends: ["Bill", "Ted"]
}]


db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(PostSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});