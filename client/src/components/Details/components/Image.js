import React from "react";
import style from '../Details.module.scss';
import Title from "../../Title/Title";
import PropTypes from 'prop-types';

const Image = ({anime})=>{
    return(
        <div className={style.img_wrap}>
            <Title title={anime.title_english}/>
            <img src={anime.images.webp.image_url} alt={'anime pic'}></img>
        </div>

            
    )
}

Image.propTypes = {
    anime: PropTypes.object
}

export default Image;