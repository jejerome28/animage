import React from "react";
import Card from "../Home/Card";
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";
import { useState } from "react";
import axios from 'axios';
import Search from "./Search";
import LoadingCard from "../Core/LoadingCard";


const Browse = ()=> {
    const url = 'https://animage.onrender.com';
    const {topAnimes, seasonAnime} = useFetch(url);
    
    const [results, setResults] = useState([]);
    const [input, setInput]= useState('');
    const [searched, setSearched] = useState('');
    // console.log(results);
    
    const handleSearch = async(e)=>{
        try{
            e.preventDefault();
            const res = await axios({
                method: 'POST',
                data: {search:input},
                url: `${url}/search`
            })
            
            setResults(res.data.ani_results);
            setInput('');
            setSearched(input);

            // console.log(res)
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>

        <Search handleSearch={handleSearch} setInput={setInput} input={input}/>
        <Title title={'Browse anime'}/>
        
        {searched && <Title title={`Results for: ${searched} anime`}/>}
        {results && <><Card ani_details={results}/></>}
        
        <Title title={'Top Season Anime'}/>
        {seasonAnime && <Card ani_details={seasonAnime.slice(0,6)}/> || <LoadingCard number={6}/>}

        <Title title={'Top Popular Anime'}/>
        {topAnimes && <Card ani_details={topAnimes.slice(0,6)}/> || <LoadingCard number={6}/>}
        </>
    )
}

export default Browse;

