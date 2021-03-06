const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);


var store = new MongoDBStore({
    uri: 'mongodb+srv://admin:password12345@cluster0.3dinq.mongodb.net/campaholicdb?retryWrites=true&w=majority',
    collection: 'session'
  });


  app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
      maxAge: 120000 
    },
    store: store,
    resave: true,
    saveUninitialized: true
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

            
app.use(routes);
mongoose.connect("mongodb+srv://admin:password12345@cluster0.3dinq.mongodb.net/campaholicdb?retryWrites=true&w=majority", 
{useNewUrlParser: true,
useUnifiedTopology: true },
);


//If no API routes are hit, send the React app
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
