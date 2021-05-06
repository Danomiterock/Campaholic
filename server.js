const express = require("express");

import session from "express-session";
import connectStore from "connect-mongo";


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const MongoStore = connectStore(session);
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());

const sess = {
  secret: 'Super secret secret',
  cookie: {
    sameSite: true,
    maxAge: 100000
  },
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: "session",

  })
};

app.use(session(sess));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/campaholicdb",
  { useUnifiedTopology: true, useCreateIndex: true }
);

//If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
