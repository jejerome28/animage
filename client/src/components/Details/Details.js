import React from "react";
import { getDetails } from "../../actions/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import AnimeDetails from "./components/AnimeDetails";
import Synopsis from "./components/Synopsis";
import Characters from "./components/Characters";
import PropTypes from 'prop-types'
import Title from "../Title/Title";


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
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-start-4 col-end-6'>

                {ani_details  ?  
                <Image anime={ani_details}/> : (<h1>loading..</h1>)}

                {ani_details  ?  
                <AnimeDetails details={ani_details}/> : (<h1>loading..</h1>)}
            </div>

            <div className='col-start-7 col-end-11'>

                {ani_details  ?  
                <Synopsis synopsis={ani_details}/> : (<h1>loading..</h1>)}
            
                <Title title={'Characters and Voice Actors'}/>
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