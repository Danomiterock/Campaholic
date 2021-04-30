const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  username: {
    type: String,
    trim: true,
    required: "Enter a username",
    unique: true
  },
  password: { type: String, },
  trips: []
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

