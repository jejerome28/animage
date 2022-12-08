import React, { Suspense } from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({anime})=>{
    return(
        <>
        <div className='mr-4 items-center w-36 drop-shadow-xl'>
            <Suspense fallback={(<h1>loading..</h1>)}>

                <Link to={`/details/`+ anime.mal_id}>
                    <img src={anime.images.webp.image_url} className='rounded-md w-36 h-56 mb-4' alt='anime pic' ></img>
                </Link>
                    <p className="text-md text-complement1">{anime.title}</p>
            </Suspense>
        </div>
        </>
    )
}

Card.propTypes = {
    anime: PropTypes.object
}

export default Card