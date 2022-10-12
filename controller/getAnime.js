const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../model/userModel');
const comment = require('../model/commentModel');
const passport = require('passport');
const getAnime = require('./fetchApi');
const { default: mongoose } = require('mongoose');

//landing page. display top airing and top season anime
const animeHome = async (req, res) => {
    try {
        const top_anime = await getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1})
        const animes = top_anime.data.data;

        const season_anime = await getAnime('https://api.jikan.moe/v4/seasons/now', {page:1})
        const seasonAnime = season_anime.data.data;
        
        console.log(req.session);
        console.log(req.user);
        // console.log(req.user.id)
        const logged = req.user;
        res.render('home', {animes, seasonAnime, logged});
    }catch(e){
        console.log(e.message);
    }
 
}

//get details of anime
const aniDetails = async(req,res)=>{
    try{
        const {id} = req.params;
        const details = await getAnime(`https://api.jikan.moe/v4/anime/${id}`);
        const cast = await getAnime(`https://api.jikan.moe/v4/anime/${id}/characters`)
        const cast_details = cast.data.data
        const ani_details = details.data.data;
        const getComments = await comment
        .find({anime_id: id})
        .populate({path: 'user_id', select: 'username', model:user});

        console.log(getComments);
        
        res.render('details', {ani_details, cast_details,getComments});
    }catch(e){
        console.log(e.message);
    }
}

const postComment = async(req,res)=>{
    try{
        const {id} = req.params;
        const text_comment = req.body.addComment;
        const new_comment = new comment({anime_id: id, body: text_comment, user_id: req.user.id})
        await new_comment.save();
        console.log(new_comment);
        res.redirect(`/details/${id}`);
    }catch(e){
        console.log(e);
    }
}

//search anime
const aniSearch =  async(req,res)=>{
 try{
        const search = req.body.search
        const results = await getAnime(`https://api.jikan.moe/v4/anime`, {q: search})
        const ani_results = results.data.data;
     
        res.render('search', {ani_results, search});
    }catch(e){
        console.log(e.message);
    }
}


//add user
const signupPage = (req,res)=>{
    res.render('signup');
}

//login user
const signupPost = async (req, res)=>{
    try{
        const newUser = req.body.username;
        const pword = req.body.password;
        const hashed = await bcrypt.hash(pword, 10);
        const newAccount = new user({username: newUser, password:hashed})
        await newAccount.save();
        console.log(newAccount);
        res.redirect('/');

    }catch(e){
        console.log(e.message);
    }
}

//login page
const loginPage = (req,res)=>{
    res.render('loginPage');
}

// authenticate login credentials
const login = passport.authenticate('local', {successRedirect:'/', failureRedirect:'/signup'})

// logout user
const logout = (req,res)=>{
    req.logOut((err)=>{
        if(err){
            throw err
        }
        res.redirect('/');

    });
}

module.exports = {
    animeHome,
    aniDetails,
    postComment,
    aniSearch,
    signupPage,
    signupPost,
    login,
    logout,
    loginPage
}

