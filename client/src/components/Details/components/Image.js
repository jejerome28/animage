import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';

const Image = ({anime})=>{
    return(
        <>
            <Title title={anime.title_english}/>
            <img src={anime.images.webp.image_url} className='h-96 rounded-lg w-60 mb-12' alt={'anime pic'}></img>
        </>

            
    )
}

Image.propTypes = {
    anime: PropTypes.object
}

export default Image;