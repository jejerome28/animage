import React from "react";
import { getDetails } from "../../actions/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import style from './Details.module.css'
import AnimeDetails from "./components/AnimeDetails";
import Synopsis from "./components/Synopsis";
import VoiceActors from "./components/VoiceActors";
import Characters from "./components/Characters";
import PropTypes from 'prop-types'


const Details = ()=>{

    const [allDetails, setDetails]= useState([])

    const {id} = useParams();
    useEffect(()=>{
        getDetails(setDetails,id);
    },[id])

    //to use the objects rendered to display details
    return(
        <>
        <div className={style.wrapper}>
            {allDetails.ani_details  ?  
            <Image anime={allDetails.ani_details}/> : (<h1>loading..</h1>)}

            {allDetails.ani_details  ?  
            <AnimeDetails details={allDetails.ani_details}/> : (<h1>loading..</h1>)}

            {allDetails.ani_details  ?  
            <Synopsis synopsis={allDetails.ani_details}/> : (<h1>loading..</h1>)}
        
        
            <div className={style._wrap + ' va'}>
            {allDetails.cast_details ?
            allDetails.cast_details.map(actor=> (<VoiceActors actors={actor} key={actor.mal_id}/>)): (<h1>loading..</h1>)}
            </div>

           <div className={style._wrap + ' cast'}>
            {allDetails.cast_details ? 
                allDetails.cast_details.map(cast => (<Characters casts={cast} key={cast.character.mal_id}/>)) : (<h1>loading..</h1>)
            }
            </div>
            
        </div>
        </>
    )
}

Details.PropTypes = {
    allDetails: PropTypes.object
}

export default Details;