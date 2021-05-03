const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//trips fills with all Trip instances with a user = to User._id
const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
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
  password: { 
    type: String, 
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

