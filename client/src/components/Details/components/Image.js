import React from "react";
import style from '../Details.module.css';
import Title from "../../Title/Title";
import propType from 'prop-types';

const Image = ({anime})=>{
    return(
        <div className={style.img_wrap}>
            <Title title={anime.title_english}/>
            <img src={anime.images.webp.image_url} alt={'anime pic'}></img>
        </div>

            
    )
}

Image.propType = {
    anime: propType.objectOf(propType.string)
}

export default Image;