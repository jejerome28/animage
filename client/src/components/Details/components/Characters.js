import React from "react";
import PropTypes from 'prop-types'

const Characters = ({casts})=> {
    const {character, voice_actors} = casts;
    
    const {character:{images:{webp:{image_url}}}} = casts
    
    return(
        <>
        <div className='columns-2 gap-8 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl'>
                <div className="flex">

                    <img src={image_url} className='w-24 h-28 rounded-md'
                    alt={character.name + ' pic'}></img>

                    <div className="pl-4">{character.name} 
                        <p className='pt-16 text-accent1'>{casts.role}</p>
                    </div>

                </div>

                <div className="flex">

                    {voice_actors.map(va=>(
                        <img src={va.person.images.jpg.image_url} className='w-24 h-28 rounded-md'
                        alt={va.person.name + ' pic'} key={va.person.mal_id}>
                        </img> 
                    )).slice(0,1)}
                    
                    {voice_actors.map(va=>(
                        <p className="pl-4" key={va.person.mal_id}>{va.person.name}
                            <div className="pt-16 text-accent1">
                                {va.language}
                            </div>
                        </p>
                    )).slice(0,1)}
                </div>


            

            
        </div>
        </>
    )
}

Characters.propTypes ={
    casts: PropTypes.object
}

export default Characters;
