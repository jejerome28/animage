const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://localhost:27017/aniMage')

const UserSchema = new mongoose.Schema({
    username: 'string',
    password: 'string'
})

const user = conn.model('user', UserSchema);
module.exports = user;
