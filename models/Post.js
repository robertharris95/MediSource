const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    userpic: String,
    image:  String,
    title: String,
    user: {type: String, required: false},
    body: {type: String, required: false}
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;