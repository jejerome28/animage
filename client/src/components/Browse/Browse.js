import React from "react";
import Card from "../Home/Card";
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";


const Browse = ()=> {
    const url = 'http://localhost:5000';
    const {topAnimes, seasonAnime} = useFetch(url);
    return(
        <>
        <Title title={'Browse anime'}/>
        <Title title={'Top Season Anime'}/>
        {seasonAnime && <Card ani_details={seasonAnime.slice(0,6)}/>}
        <Title title={'Top Popular Anime'}/>
        {topAnimes && <Card ani_details={topAnimes.slice(0,6)}/>}
        </>
    )
}

export default Browse;

