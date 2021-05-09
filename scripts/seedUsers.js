const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:password12345@cluster0.3dinq.mongodb.net/campaholicdb?retryWrites=true&w=majority");

const UserSeed = [
  {
    first_name: "Ahmed",
    last_name: "McStuffy",
    email: "ahmed@example.com",
    username: "AdventurerAhmed",
    password: "asdf1234",
    posts: [],
  },
  {
    first_name: "Robert",
    last_name: "Uppy",
    email: "bobby@example.com",
    username: "BackyardBobby",
    password: "asdf1234",
    posts: [],
  },
  {
    first_name: "Caroline",
    last_name: "Smith",
    email: "caroline@example.com",
    username: "CarolineTheExtreme",
    password: "asdf1234",
    posts: [],
  },
  {
    first_name: "Dude",
    last_name: "Frankenstein",
    email: "Dude@example.com",
    username: "TheDude",
    password: "asdf1234",
    posts: [],
  },
];

db.User.remove()
  .then(() => db.User.collection.insertMany(UserSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
