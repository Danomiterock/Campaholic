const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  image:{
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
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
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "post"
  }]

});

const User = mongoose.model("user", UserSchema);

module.exports = User;

