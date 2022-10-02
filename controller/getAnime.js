const express = require('express');
const axios = require('axios');
const bcrypt = require('bcrypt');
const user = require('../model/userModel');
const passport = require('passport');


//landing page. display top airing and top season anime
const animeHome = async (req, res) => {
    try {
        const top_anime = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing&page=1')
        const animes = top_anime.data.data;

        const season_anime = await axios.get('https://api.jikan.moe/v4/seasons/now?page=1')
        const seasonAnime = season_anime.data.data;
        
        console.log(req.session);
        console.log(req.user);
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
        const details = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        const cast = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
        const cast_details = cast.data.data
        const ani_details = details.data.data;
        
        res.render('details', {ani_details, cast_details});
    }catch(e){
        console.log(e.message);
    }
}

//search anime
const aniSearch =  async(req,res)=>{
 try{
        const search = req.body.search
        const results = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)
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
    aniSearch,
    signupPage,
    signupPost,
    login,
    logout
}
