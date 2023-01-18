import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ani_details,children})=>{
    
    return(
        <>
        {/* render acquired results to elements */}
            <div className='flex w-slider-w mb-12 flex-wrap'>
            {/* {ani_details ? ani_details.map(anime =>  */}
            {ani_details.map(anime => 
            <div key={anime.mal_id} className='mr-4 items-center w-36 drop-shadow-xl cursor-pointer hover:scale-125 ease-in duration-300 basis-32'>
                <Link  to={`/details/`+ anime.mal_id}>
                    <img src={anime.images.webp.image_url} className='rounded-md w-36 h-56 mb-4' alt='anime pic' ></img>
                    <p className="text-md text-complement1">{anime.title}</p>
                </Link>
            </div>)}
            {/* ) :(<h1>loadin...</h1>)} */}
            {/* ).slice(0,6):(<h1>loadin...</h1>)} */}
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