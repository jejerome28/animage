import React from "react";
import style from './Card.module.css'

const Card = ({anime})=>{
    return(
        <>
        <div className={style.card}>
            <img src={anime.images.webp.image_url} alt='anime pic' ></img>
            <p>{anime.title}</p>
        </div>
        </>
    )
}

export default Card