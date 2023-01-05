import React from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";

const Characters = ()=> {
    const {cast_details} = useContext(DetailsResult);
    // const {character, voice_actors} = cast_details;
    
    // const {character:{images:{webp:{image_url}}}} = cast_details
    
    return(
        <>
        {cast_details ? 
        cast_details.map(cast => (

        <div key={cast.character.mal_id} className='columns-2 gap-8 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl'>
                <div className="flex">

                    <img src={cast.character.images.webp.image_url} className='w-24 h-28 rounded-md'
                    alt={cast.character.name + ' pic'}></img>

                    <div className="pl-4">{cast.character.name} 
                        <p className='pt-16 text-accent1'>{cast.role}</p>
                    </div>

                </div>

                <div className="flex">

                    {cast.voice_actors.map(va=>(
                        <img src={va.person.images.jpg.image_url} className='w-24 h-28 rounded-md'
                        alt={va.person.name + ' pic'} key={va.person.mal_id}>
                        </img> 
                    )).slice(0,1)}
                    
                    {cast.voice_actors.map(va=>(
                        <p className="pl-4" key={va.person.mal_id}>{va.person.name}
                            <div className="pt-16 text-accent1">
                            {va.language}
                            </div>
                        </p>
                    )).slice(0,1)}
                </div>
        </div>

        ))
            
        : (<h1>loading</h1>)
        }
        </>
    )
}

Characters.propTypes ={
    casts: PropTypes.object
}

export default Characters;
