import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import useFetch from "../../actions/useFetch";
import Title from "../Title/Title";

const Card = ()=>{
    //get anime list from server using custom hook
    const url = 'http://localhost:5000';
    const {seasonAnime} = useFetch(url);
    
    return(
        <>
        {/* render acquired results to elements */}
        <Title title={'Top Season Anime'}/>
            <div className='flex w-slider-w mb-12'>
            {seasonAnime ? seasonAnime.map(anime => 
            <div key={anime.mal_id} className='mr-4 items-center w-36 drop-shadow-xl cursor-pointer hover:scale-125 ease-in duration-300'>
                <Link  to={`/details/`+ anime.mal_id}>
                    <img src={anime.images.webp.image_url} className='rounded-md w-36 h-56 mb-4' alt='anime pic' ></img>
                    <p className="text-md text-complement1">{anime.title}</p>
                </Link>
            </div>
                
            ).slice(0,6):(<h1>loadin...</h1>)}

            </div>
        </>
    )
}

Card.propTypes = {
    anime: PropTypes.object
}

export default Card