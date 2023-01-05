import React from "react";
import Card from "../Home/Card";
// import {Link} from 'react-router-dom'
// import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";


const Browse = ()=> {
    const topAnime = 'http://localhost:5000';
    const seasonAnime = 'http://localhost:5000';
    return(
        <>
        <Title title={'Browse anime'}/>
        <Card url={topAnime}/>
        <Card url={seasonAnime}/>
        </>
    )
}

export default Browse;

