const express = require("express");

const session = require('express-session');
const connectStore = require('connect-mongo');



const { MONGODB_URI } = require('./config/database')

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(cors());


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/campaholicdb",
    { useUnifiedTopology: true, useCreateIndex: true }
);
//setting up connect-mongo store
const MongoStore = new MongoStore({ MONGODB_URI, collection:'session' });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sess = {
    secret: 'Super secret secret',
    cookie: {
        sameSite: true,
        maxAge: 100000
    },
    resave: false,
    saveUninitialized: true,
    store: MongoStore({
        mongooseConnection: mongoose.connection,
        collection: "session",

    })
};
//express session
app.use(session(sess));

// Add routes, both API and view
app.use(routes);


//If no API routes are hit, send the React app
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
