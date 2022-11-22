import React from "react";
import style from '../Details.module.css'
import PropTypes from 'prop-types'

const Characters = ({casts})=> {
    const {character, voice_actors} = casts;
    return(
        <>
        <div className={style.characters}>
            <img src={character.images.webp.image_url} 
            alt={character.name + ' pic'}></img>
            <p>{character.name} - {casts.role}</p>
            
            {voice_actors.map(va=>(
                <img src={va.person.images.jpg.image_url}
                alt={va.person.name + ' pic'} key={va.person.mal_id}>
                </img> 
            )).slice(0,1)}
            
            {voice_actors.map(va=>(
                <p key={va.person.mal_id}>{va.person.name}</p>
            )).slice(0,1)}
            
        </div>
        </>
    )
}

Characters.propTypes ={
    casts: PropTypes.object
}

export default Characters;
