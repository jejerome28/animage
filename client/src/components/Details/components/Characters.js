import React from "react";
import style from '../Details.module.css'

const Characters = ({casts})=> {
    return(
        <>
        <div className={style.characters}>
            <img src={casts.character.images.webp.image_url} 
            alt={casts.character.name + ' pic'}></img>
            <p>{casts.character.name} - {casts.role}</p>
        </div>
        </>
    )
}

export default Characters;
