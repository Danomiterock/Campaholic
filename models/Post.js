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
    statement: {
        type: String,
    },
    images: [{
        title: {
            type: String,
        },
        url: {
            type: String,
        }
    }],
    activities: [{
        title: {
            type: String,
        }
    }],
    friends: [{
        username: {
            type: String,
        }
    }]
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;