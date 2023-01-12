import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";

const Image = ()=>{
    //use anime details result context
    const {ani_details} = useContext(DetailsResult);
    return(
        <>
        
        {ani_details && 
            <>
            <Title title={ani_details.title_english}/>
            <img src={ani_details.images.webp.image_url} className='h-97 rounded-lg w-60 mb-12' alt={'anime pic'}></img>
            </>
        || (<h1>loding</h1>)
        }
            
        </>

            
    )
}

Image.propTypes = {
    ani_details: PropTypes.object
}

export default Image;