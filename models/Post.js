const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    activities: [],
    friends: []
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;