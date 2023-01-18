const passport = require('passport');
const getAnime = require('./fetchApi');
const {getComments, getUserComments} = require('./populateCommentUser');
const { getUserPlaylist, getPlaylist } = require('./populatePlaylistUser');
const {addToUserComments} = require('./postCommentUser');
const {addToUserPlaylist} = require('./postPlaylist');
const {createComment, createUser, createPlaylist} = require('./createDoc');


//landing page display top airing and top season anime
const animeHome = async (req, res) => {
    try {
        const topAnimes = await getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'favorite', page:1})
        const seasonAnime = await getAnime('https://api.jikan.moe/v4/seasons/now', {page:1})
        // res.render('home', {animes, seasonAnime, logged:req.user});
        // console.log(req.user);
        res.status(200).json({topAnimes, seasonAnime})
    }catch(e){
        res.status(404).json({message: e.message})
        console.log(e.message);
    }
 
}

//get details of anime
const aniDetails = async(req,res)=>{
    try{
        const {id} = req.params;
        const ani_details = await getAnime(`https://api.jikan.moe/v4/anime/${id}`);
        const cast_details = await getAnime(`https://api.jikan.moe/v4/anime/${id}/characters`)
        const comments = await getComments(id)
        
        // res.render('details', {ani_details, cast_details,comments});
        res.status(200).json({ani_details, cast_details, comments})
        // console.log(comments);
    }catch(e){
        res.status(404).json({message: e.message})
        console.log(e.message);
    }
}

//get user profile
const userProfile = async (req, res)=> {
    try{
        //get the id of the user then pass to query
        const {id} = req.params;
        const allComments = await getUserComments(id);
        const allPlaylist = await getUserPlaylist(id);
        
        //filter details to be sent
        const {username, comments} = allComments;
        const {playlist} = allPlaylist;
        // console.log(allPlaylist);

        //send the details to front end
        res.status(200).json({username, comments, playlist});
    }catch(e){
        console.log(e);
    }
}

//post comments to comments part
const postComment = async(req,res)=>{
    try{
        //get the id of the anime being commented
        const {id} = req.params;
        
        //send the received comment to the database
        const new_comment = await createComment(id, req.body.addComment, req.user.id);
        
        //send the id of the new comment to tthe user model for tracking
        await addToUserComments(req.user._id, new_comment.id);
        
        // get and send the updated comments of the user
        const comments = await getComments(id)
        console.log(id);
        res.status(200).json({comments});

    }catch(e){
        res.status(404).json({message: e})
        console.log(e);
    }
}

const updateProfile = async(req,res) => {
    try{
        //get the id from the browser
        const {id} = req.params;

        //accept the data sent by react and add to parameters
        const new_playlist = await createPlaylist(req.body.anime_id,req.body.ani_title, req.body.userId);
        
        //add to the profile of the user the details
        await addToUserPlaylist(id, new_playlist.id);
        
    }
    catch(e){
        res.status(404).json({message: e});
        console.log(e);
    }
}

//search anime
const aniSearch =  async(req,res)=>{
try{
        const ani_results = await getAnime(`https://api.jikan.moe/v4/anime`, {q: req.body.search})
        res.render('search', {ani_results, search:req.body.search});
     
    }catch(e){
        console.log(e.message);
    }
}


//add user
const signupPage = (req,res)=>{
    res.render('signup');
}

//create new user
//getting the input values sent by frontend
const signupPost = async (req, res)=>{
    try{
        await createUser(req.body.username,req.body.password);
        res.status(200).send('account created');

    }catch(e){
        res.status(404).json({message:e.message});
        console.log(e.message);
    }
}

//login page
const loginPage = (req,res)=>{
    res.render('loginPage');
}

// authenticate login credentials

// const login = passport.authenticate('local', {successRedirect:'/', failureRedirect:'/signup'})
const login =  (req, res)=>{
          passport.authenticate('local', {successRedirect:'/', failureRedirect:'/signup'},(err,user,info)=>{
            if(err)throw err;
            if(!user){
                res.status(404).json({message: 'no user exists'});
                console.log('no user exists');
            }
            else{
                req.logIn(user,(err)=>{
                    if(err)throw err;
                    res.status(200).json(req.user)
                    console.log(req.user);
                })
            }
        })(req,res);
}
// 
// logout user
const logout = (req,res)=>{
    req.logOut((err)=>{
        if(err){
            throw err
        }
        res.status(200).json(req.user);

    });
}

//export functions
module.exports = {
    animeHome,
    aniDetails,
    postComment,
    aniSearch,
    signupPage,
    signupPost,
    login,
    logout,
    loginPage,
    userProfile,
    updateProfile
}

