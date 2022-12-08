import getAnime from "../api/fetch";

const url = 'http://localhost:5000';

// to get the top anime list then export to anilist component
export const getTopAni = async (set_state)=> {
    try{
        const topAni = await getAnime(`${url}/`);
        set_state(topAni.topAnimes);
        console.log(topAni.topAnimes)
    }catch(e){
        console.log(e)
    }
}

export const getSznAni = async (set_state)=> {
    try{
        const sznAni = await getAnime(`${url}/`);
        set_state(sznAni.seasonAnime.slice(0,6));
        console.log(sznAni);

    }catch(e){
        console.log(e)
    }
}

// to get the anime details with the use of id 
export const getDetails = async(set_state,id) => {
    try{
        const details = await getAnime(`${url}/details/${id}`);
        set_state(details);
        console.log(details.cast_details);
        
    }catch(e){
        console.log(e)
    }
}