import React from "react";
import style from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({anime})=>{
    return(
        <>
        <div className={style.card}>
            <Link to={`/details/`+ anime.mal_id}>
                <img src={anime.images.webp.image_url} alt='anime pic' ></img>
            </Link>
                <p>{anime.title}</p>
        </div>
        </>
    )
}

export default Card