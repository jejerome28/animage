import React from "react";
import style from '../Details.module.css'
import PropTypes from 'prop-types'

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

Characters.propTypes ={
    casts: PropTypes.object
}

export default Characters;
