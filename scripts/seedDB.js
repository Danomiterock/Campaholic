const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campaholicdb");

const UserSeed = [
  {
    email: "Ahmed@.fake.com",
    username: "AdventurerAhmed",
    password: "asdf1234",
    trips: [],
  },
  {
    email: "Bobby@.fake.com",
    username: "BackyardBobby",
    password: "asdf1234",
    trips: [],
  },
  {
    email: "Caroline@.fake.com",
    username: "CarolineTheExtreme",
    password: "asdf1234",
    trips: [],
  },
  {
    email: "Dude@.fake.com",
    username: "TheDude",
    password: "asdf1234",
    trips: [],
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
