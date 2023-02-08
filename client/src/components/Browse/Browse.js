import React from "react";
import Card from "../Home/Card";
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";
import { useState } from "react";
import axios from 'axios';
import Search from "./Search";


const Browse = ()=> {
    const url = '/';
    const {topAnimes, seasonAnime} = useFetch(url);
    
    const [results, setResults] = useState([]);
    const [input, setInput]= useState('');
    const [searched, setSearched] = useState('');
    console.log(results);
    
    const handleSearch = async(e)=>{
        try{
            e.preventDefault();
            const res = await axios({
                method: 'POST',
                data: {search:input},
                url: `/search`
            })
            
            setResults(res.data.ani_results);
            setInput('');
            setSearched(input);
            console.log(res);

            console.log(res)
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
        {seasonAnime && <Card ani_details={seasonAnime.slice(0,6)}/>}

        <Title title={'Top Popular Anime'}/>
        {topAnimes && <Card ani_details={topAnimes.slice(0,6)}/>}
        </>
    )
}

export default Browse;

