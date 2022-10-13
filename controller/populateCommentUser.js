//get comment in the database then display it to details view
const {user, comment} = require('../model');

const getComments = (id, modelName) => {
    
    const comments = comment
    .find({anime_id: id})
    .populate({path: 'user_id', select: 'username', model:user})
    
    return comments;
}

//todo populate comments by a specific user

module.exports = {
    getComments
};
