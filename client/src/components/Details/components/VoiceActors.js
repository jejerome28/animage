import React from "react";
import style from '../Details.module.css'
import PropTypes from 'prop-types'

const VoiceActors = ({actors})=>{
    const {voice_actors} = actors;
    return(
       <>

                {/* {actors.voice_actors.map(va=>(
                <div className={style.va}>
                    <img src={va.person.images.jpg.image_url}
                    alt={va.person.name + ' pic'} key={va.person.mal_id}>
                    </img> 
                    <p>{va.person.name}</p>
                </div>)
                ).slice(0,1)} */}
            
                <div className={style.va}>
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

VoiceActors.propTypes = {
    actors: PropTypes.object
}

export default VoiceActors;