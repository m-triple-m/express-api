const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    filename : String,
    user : { type : mongoose.Types.ObjectId, ref : 'users' },
    created : Date,
    shared : [{ type : mongoose.Types.ObjectId, ref : 'users' }],
    ext : String,
})

const usermodel = mongoose.model('users', userSchema);

module.exports = usermodel