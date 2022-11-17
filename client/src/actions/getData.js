import getAnime from "../api/fetch";

const url = 'http://localhost:5000';

// to get the top anime list then export to anilist component
export const getTopAni = async (set_state)=> {
    const topAni = await getAnime(`${url}/`);
    set_state(topAni[0]);
    console.log(topAni);
}

export const getSznAni = async (set_state)=> {
    const sznAni = await getAnime(`${url}/`)
    set_state(sznAni[1].slice(0,10))
}