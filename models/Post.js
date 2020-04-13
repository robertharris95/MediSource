const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    img:  String,
    username: {type: String, required: true},
    body: {type: String, required: true}
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;