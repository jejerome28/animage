import React from "react";
import style from './Card.module.css'

const Card = ({anime})=>{
    return(
        <>
        <div className={style.card}>
            <a href="/#">
            <img src={anime.images.webp.image_url} alt='anime pic' ></img>
            </a>
            <p>{anime.title}</p>
        </div>
        </>
    )
}

export default Card