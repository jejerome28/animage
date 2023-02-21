import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ani_details,children})=>{
    
    return(
        <>
        {/* render acquired results to elements */}
            <div className='flex w-full justify-center mb-12 flex-wrap'>

                {ani_details.map(anime => 
                    <Link key={anime.mal_id} className=" block p-4 basis-4/12 drop-shadow-xl cursor-pointer hover:scale-125 ease-in duration-300 md:basis-32 md:p-0 md:mr-4" to={`/details/`+ anime.mal_id}>
                            <img src={anime.images.webp.image_url} className='rounded-md max-w-xs max-h-48 object-contain md:max-h-56 md:max-w-md mb-4' alt='anime pic' ></img>
                            <p className="text-sm md:text-base text-complement1">{anime.title}</p>
                    </Link>
                )}
                {children}

            </div>
        </>
    )
}

Card.propTypes = {
    children: PropTypes.object,
    ani_details:PropTypes.array
}

export default Card