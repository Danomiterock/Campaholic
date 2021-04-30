const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Trips collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campaholicdb"
);

const TripSeed = [{
    start_date: 10-06-2021,
    length: 2,
    location: "Mogollon Rim",
    description: "",
    activities: [{
        title: "",
        description: ""
    }],
    images: [{
        title: "",
        url: ""
    }],

},
{
    start_date: 06-14-2021,
    length: 1,
    location: "Grand Canyon",
    description: "",
    activities: [{
        title: "",
        description: ""
    }],
    images: [{
        title: "",
        url: ""
    }],

},
{
    start_date: 08-15-2021,
    length: 4,
    location: "Woods Canyon Lake",
    description: "",
    activities: [{
        title: "",
        description: ""
    }],
    images: [{
        title: "",
        url: ""
    }],

}

];

db.Trip
  .remove({})
  .then(() => db.Trip.collection.insertMany(TripSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
