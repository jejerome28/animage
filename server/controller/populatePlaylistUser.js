//get playlist in the database then display it to details view
const {user, playlist, comment} = require('../model');

const getPlaylist = (id) => {
    
    const playlists = playlist
    .find({anime_id: id})
    .populate({path: 'user_id', select: 'username', model:user})
    
    return playlists;
}

//todo populate playlist by a specific user
const getUserPlaylist = (id) => {
    const profile = user
    .findById(id)
    .populate({path: 'playlist', select:['body', 'anime_id'], model: playlist})
    
    return profile
}

module.exports = {
    getPlaylist,
    getUserPlaylist
};

