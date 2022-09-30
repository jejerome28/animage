const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const mongoose = require('mongoose');
const user = require('./model/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');
const local_strategy = require('passport-local');
const session = require('express-session');
const dbString = 'mongodb://localhost:27017/aniMage';
const mongoStore = require('connect-mongo');
const storeSession = mongoStore.create({mongoUrl:dbString, collectionName: 'sessions'});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret:'secret key',
    resave: false,
    saveUninitialized: true,
    store: storeSession,
    cookie: {
        maxAge: 86400000
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
})

//create custom connection
mongoose.createConnection(dbString, (err,result)=>{if(err)throw err; console.log('connected')})


async function verify(username, password, done) {

    try{
    const userAccount = await user.findOne({ username });
    const isValid = await bcrypt.compare(password, userAccount.password)
    
    console.log(isValid);
    
    if(!userAccount){return done(null,false)}
    if(isValid){return done(null, userAccount)}
    else{return done(null, false)}
    }
    catch(err){
        console.log(err)
    }

    
}
const strat = new local_strategy(verify);

passport.use(strat);
passport.serializeUser((user,done)=>{
    done(null, user.id);
})

passport.deserializeUser((userId, done)=>{
    user.findById(userId)
        .then((user)=>{
            done(null,user);
        })
        .catch(err => done(err));
})

//landing page. display top airing and top season anime
app.get('/', async (req,res)=>{
    try {
        const top_anime = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing&page=1')
        const animes = top_anime.data.data;
        
        const season_anime = await axios.get('https://api.jikan.moe/v4/seasons/now?page=1')
        const seasonAnime = season_anime.data.data;
        
        console.log(req.session);
        res.render('home', {animes, seasonAnime});
    }catch(e){
        console.log(e.message);
    }
})

//get details of anime
app.get('/details/:id', async(req,res)=>{
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
})


//search anime
app.post('/search', async(req,res)=>{
 try{
        const search = req.body.search
        const results = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}`)
        const ani_results = results.data.data;
     
        res.render('search', {ani_results, search});
    }catch(e){
        console.log(e.message);
    }
})

//add user
app.get('/signup', (req,res)=>{
    res.render('signup');
})

app.post('/signup', async (req, res)=>{
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
})

//login user
app.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/signup'})


)

app.get('/logout', (req,res)=>{
    req.logOut();
    res.redirect('/');
})


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})