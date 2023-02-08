require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.MONGO_URI);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }],
    playlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playlist'
    }]
})


const user = conn.model('user', UserSchema);

module.exports = user;
