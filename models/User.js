const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs");
mongoose.promise = Promise

const userSchema = new Schema({
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    name: { type: String, required: false },
    profilepic: String,
    postrel: { type: Schema.Types.ObjectId, ref: "Post"},
    date: { type: Date, default: Date.now }
})

userSchema.methods = {
    checkPassword: function(input){
        return bcrypt.compareSync(input, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

userSchema.pre('save', function (next) {
    if(!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('model/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;