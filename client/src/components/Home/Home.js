import React from "react";
import Card from "./Card";
import ListItem from"./ListItem";
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";
import LoadingCard from "../Core/LoadingCard";
import LoadingList from "../Core/LoadingList";

const Home = () =>{
    const url = 'https://animage.onrender.com';
    const {seasonAnime, topAnimes} = useFetch(url);
    return(
        <>
        <div className="flex flex-col md:w-9/12 mb-12 mt-12">
            <Title title={'Top Season Anime'}/>
            {seasonAnime && <Card ani_details={seasonAnime.slice(0, 8)} /> || <LoadingCard number={6}/>}
            
            <Title title={'Top Popular Anime'}/>
            {topAnimes && <ListItem ani_details={topAnimes.slice(0,10)}/> || <LoadingList number={10}/>}

            
        </div>
        </>
    )
}

export default Home