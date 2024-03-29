const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.MONGO_URI)

const playlistSchema = new mongoose.Schema({
    anime_id: String,
    body: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

const playlist = conn.model('playlist', playlistSchema);

module.exports = playlist;
