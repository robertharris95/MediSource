const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
mongoose.promise = Promise


const userSchema = new Schema({

    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
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