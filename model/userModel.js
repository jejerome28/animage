const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: 'string',
    password: 'string'
})

module.exports = mongoose.model('user', UserSchema);

