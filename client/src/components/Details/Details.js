import React from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import AnimeDetails from "./components/AnimeDetails";
import PropTypes from 'prop-types'
import useFetch from "../../actions/useFetch";
import Characters from "./components/Characters";
import Synopsis from "./components/Synopsis";
import InputArea from "./components/InputArea";

const Details = ()=>{

    //get the id for request
    const {id} = useParams();
    const url = `http://localhost:5000/details/${id}`;

    //to get the details sent by the server
    const {ani_details, cast_details, comments} = useFetch(url);
    return(
        <>  
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-start-4 col-end-6'>
                {ani_details && <Image ani_details={ani_details}/>}
                
                {ani_details &&<AnimeDetails ani_details={ani_details}/> }
                
            </div>

            <div className='col-start-6 col-end-11'>

                {ani_details && <Synopsis ani_details={ani_details}/>}
                
                {cast_details && <Characters cast_details={cast_details}/>}
                
            </div>
        
            <div className="col-start-5 col-end-10 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl">
                {comments && <InputArea id={id} comments={comments} />}
                

            </div>
        </div>

        </>
    )
}

Details.propTypes = {
    allDetails: PropTypes.object
}

export default Details;