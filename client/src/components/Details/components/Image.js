import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';
// import useFetch from "../../../actions/useFetch";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";
// import { DetailsResult } from "../detailsResult";

const Image = ()=>{
    // const {id} = useParams();
    // const url = `http://localhost:5000/details/${id}`;
    
    // const {ani_details} = useFetch(url);
    const {ani_details} = useContext(DetailsResult);
    return(
        <>
            {ani_details ? 
            
            <div>
            <Title title={ani_details.title_english}/>
            <img src={ani_details.images.webp.image_url} className='h-97 rounded-lg w-60 mb-12' alt={'anime pic'}></img>

            </div>
            : (<h1>loading</h1>)
        
        }
            
        </>

            
    )
}

Image.propTypes = {
    ani_details: PropTypes.object
}

export default Image;