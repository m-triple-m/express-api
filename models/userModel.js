const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    age : Number
})

const usermodel = mongoose.model('users', userSchema);

module.exports = usermodel