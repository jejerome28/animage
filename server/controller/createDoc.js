const { user, comment, playlist } = require('../model');
const bcrypt = require('bcrypt');

const createComment = async(anime_id, commentBody, userId)=>{
    const new_comment = new comment({anime_id: anime_id, body: commentBody, user_id: userId});
    await new_comment.save();
    return new_comment;
}

const createUser = async(username, password)=>{
    const hashed = await bcrypt.hash(password,10);
    const newAccount = new user({username:username,password:hashed})
    await newAccount.save();
    return newAccount;
}

const createPlaylist = async(anime_id, ani_title, userId)=>{
    const new_playlist = new playlist({anime_id: anime_id, body: ani_title, user_id: userId});
    await new_playlist.save();
    return new_playlist;
}


module.exports = {
    createComment,
    createUser,
    createPlaylist
}
