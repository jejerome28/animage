import React from "react";
import { getDetails } from "../../actions/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import style from './Details.module.css'
import AnimeDetails from "./components/AnimeDetails";
import Synopsis from "./components/Synopsis";
import Characters from "./components/Characters";
import PropTypes from 'prop-types'


const Details = ()=>{

    const [allDetails, setDetails]= useState([]);

    const {id} = useParams();

    useEffect(()=>{
        getDetails(setDetails,id);
    },[id])
    
    const {ani_details, cast_details} = allDetails;

    //to use the objects rendered to display details
    return(
        <>
        <div className={style.wrapper}>
            {ani_details  ?  
            <Image anime={ani_details}/> : (<h1>loading..</h1>)}

            {ani_details  ?  
            <AnimeDetails details={ani_details}/> : (<h1>loading..</h1>)}

            {ani_details  ?  
            <Synopsis synopsis={ani_details}/> : (<h1>loading..</h1>)}
        
           <div className={style._wrap + ' cast'}>
            {cast_details ? 
                cast_details.map(cast => (<Characters casts={cast} key={cast.character.mal_id}/>)) : (<h1>loading..</h1>)
            }
            </div>
            
        </div>
        </>
    )
}

Details.propTypes = {
    allDetails: PropTypes.object
}

export default Details;