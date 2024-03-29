const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.MONGO_URI)

const commentSchema = new mongoose.Schema({
    anime_id: String,
    body: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

const comment = conn.model('comment', commentSchema);

module.exports = comment