const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sessionSchema = new Schema ({
    rel: { type: Schema.Types.ObjectId, ref: "sessions"}
})

const Session = mongoose.model("Session", sessionSchema)

module.exports = Session