// require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const {user} = require('./model');
const passport = require('passport');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const storeSession = mongoStore.create({mongoUrl:process.env.MONGO_URI, collectionName: 'sessions'});
const routes = require('./routes');
const method_override = require('method-override');
const {auth} = require('./controller');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const port  = process.env.PORT || 5000

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 60, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// if (process.env.NODE_ENV === 'production') {
//     //*Set static folder up in production
//     app.use(express.static('/public'))

//     app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'public','index.html')));
//   }


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(cors({origin: "*"}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(method_override('_method'));
// app.use(express.static(path.join(__dirname, '/public')));
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
app.use(limiter)

auth(
    passport,
    username => user.findOne({username})
)



//create custom connection
mongoose.createConnection(process.env.MONGO_URI, (err,result)=>{if(err)throw err; console.log('connected')})


//use all routes
app.use('/', routes);



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})