const mongoose = require('mongoose');
const MongoSchema = mongoose.Schema;

// Create User Mongo Schema
const UserSchema = new MongoSchema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User', UserSchema);