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
const routes = require('./routes/routes');
const method_override = require('method-override');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(method_override('_method'));
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

//use all routes
app.use('/', routes);



app.listen(3000, ()=>{
    console.log('listening on port 3000');
})