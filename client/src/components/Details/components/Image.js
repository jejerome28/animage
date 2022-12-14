import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';
import useFetch from "../../../actions/useFetch";
import { useParams } from "react-router-dom";

const Image = ()=>{
    
    const {id} = useParams();
    const url = `http://localhost:5000/details/${id}`;
    const {ani_details} = useFetch(url);

    
    return(
        <>
            {ani_details ?  

                (<div>

            <Title title={ani_details.title_english}/>
            <img src={ani_details.images.webp.image_url} className='h-96 rounded-lg w-60 mb-12' alt={'anime pic'}></img>

                </div>)
            
            : (<h1>loading...</h1>)}
        </>

            
    )
}

Image.propTypes = {
    anime: PropTypes.object
}

export default Image;