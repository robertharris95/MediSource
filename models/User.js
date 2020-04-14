const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
mongoose.promise = Promise

const userSchema = new Schema({

    name: { type: String, required: false },
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    date: { type: Date, default: Date.now }

})

userSchema.methods = {
    checkPassword: function(input){
        return bcrypt.compareSync(input, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync(10), null)
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