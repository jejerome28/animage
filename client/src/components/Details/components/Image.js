import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';

const Image = ({ani_details})=>{
    return(
        <>
            <Title title={ani_details.title_english}/>
            <img src={ani_details.images.webp.image_url} className='h-97 rounded-lg w-60 mb-12' alt={'anime pic'}></img>
            
        </>

            
    )
}

Image.propTypes = {
    ani_details: PropTypes.object
}

export default Image;