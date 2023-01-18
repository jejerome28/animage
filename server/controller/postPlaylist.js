const { user } = require('../model');

const addToUserPlaylist = async(id, playlistId) => {
    await user.findByIdAndUpdate(
        id,
        {$push: {playlist:playlistId}}

    );
}

module.exports = {
    addToUserPlaylist
}