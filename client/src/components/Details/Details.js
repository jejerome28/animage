import React from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import AnimeDetails from "./components/AnimeDetails";
import PropTypes from 'prop-types'
import useFetch from "../../actions/useFetch";
import { DetailsResult } from "./detailsResult";
import Characters from "./components/Characters";
import Synopsis from "./components/Synopsis";
import Comments from "./components/Comments";
import InputArea from "./components/InputArea";

const Details = ()=>{

    const {id} = useParams();
    const url = `http://localhost:5000/details/${id}`;


    const {ani_details,cast_details, comments} = useFetch(url);
    
    return(
        <>  
        <DetailsResult.Provider value={{ani_details, cast_details, comments}}>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-start-4 col-end-6'>
                <Image/>
                <AnimeDetails/>
            </div>

            <div className='col-start-6 col-end-11'>

                <Synopsis/>
                <Characters/>
            </div>
        
            <div className="col-start-5 col-end-10 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl">
                <Comments/>
                <InputArea/>

            </div>
            
        </div>

        </DetailsResult.Provider>
        </>
    )
}

Details.propTypes = {
    allDetails: PropTypes.object
}

export default Details;