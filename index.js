const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let config = {
    headers: {
        Accept: 'application/json',
        "User-Agent": "axios 0.21.1"
    }
}


//landing page. display top airing and top season anime
app.get('/', async (req,res)=>{
    try {
        const top_anime = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing&page=1')
        const animes = top_anime.data.data;
        
        const season_anime = await axios.get('https://api.jikan.moe/v4/seasons/now?page=1')
        const seasonAnime = season_anime.data.data;
        // console.log(seasonAnime);
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
        const ani_details = details.data.data;
        // console.log(details);
        res.render('details', {ani_details});
    }catch(e){
        console.log(e.message);
    }
})



app.listen(3000, ()=>{
    console.log('listening on port 3000');
})