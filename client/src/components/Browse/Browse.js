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
        <Card ani_details={seasonAnime}/>
        <Title title={'Top Popular Anime'}/>
        <Card ani_details={topAnimes}/>
        </>
    )
}

export default Browse;

