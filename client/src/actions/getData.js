import getAnime from "../api/fetch";
import { useParams } from "react-router-dom";

const url = 'http://localhost:5000';

// to get the top anime list then export to anilist component
export const getTopAni = async (set_state)=> {
    const topAni = await getAnime(`${url}/`);
    set_state(topAni.topAnimes);
}

export const getSznAni = async (set_state)=> {
    const sznAni = await getAnime(`${url}/`);
    set_state(sznAni.seasonAnime.slice(0,10));
    console.log(sznAni);
}

// to get the anime details with the use of id 
export const getDetails = async(set_state, id) => {
    const details = await getAnime(`${url}/details/${id}`);
    set_state(details);
    console.log(details.ani_details);
}