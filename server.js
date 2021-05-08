const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;


// const session = require("express-session");
// const MongoStore = require("connect-mongo")(express);
// const MongoDBStore = require('connect-mongodb-session')(session);



// const { MONGODB_URI } = require('./config/database')


// let store = new MongoDBStore({
//     uri: process.env.MONGODB_URI || "mongodb://localhost/campaholicdb",
//     collection: 'session'
// });
// Connect to the Mongo DB

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.use(cors());
// store.on("error",(err) => {
    //     console.log(err)
    // })
    
    // Connect to the Mongo DB
    // mongoose.connect(
        //     process.env.MONGODB_URI || "mongodb://localhost/campaholicdb",
        //     { useUnifiedTopology: true, useCreateIndex: true }
        // );
        //setting up connect-mongo store
        //  const mongoStore = new MongoStore({ MONGODB_URI, collection:'session' });
        
        // // Define middleware here
        
        // app.use(require('express-session')({
            //     secret: 'This is a secret',
            //     cookie: {
                //         maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
                //     },
                //     store: store
                // }));
                
                
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campaholicdb");


//If no API routes are hit, send the React app
// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
