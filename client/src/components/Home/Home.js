import React from "react";
import Card from "./Card";
import ListItem from "./ListItem";
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";

const Home = () =>{
    const url = 'http://localhost:5000';
    const {seasonAnime, topAnimes} = useFetch(url);
    return(
        <>
        <div className="flex flex-col w-slider-w mb-12 mt-12">
            <Title title={'Top Season Anime'}/>
            {seasonAnime && <Card ani_details={seasonAnime.slice(0,6)}/>}
            
            <Title title={'Top Popular Anime'}/>
            {topAnimes && <ListItem ani_details={topAnimes}/>}
            
        </div>
        </>
    )
}

export default Home