import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";

const AnimeDetails = ({details})=>{
    const {genres} = details;
    const {studios} = details;
    return(
        <>
        <Title title={'Anime Details'}/>
        <div className='bg-accent2 rounded-md pl-4 p-4 text-complement1 w-60 drop-shadow-xl'>
            <p className="font-semibold">Date aired: </p><p className="text-accent1 mb-4">{details.aired.string}</p>
            <p className="font-semibold">Score: </p> <p className="text-accent1 mb-4">{details.score}</p>
            <p className="font-semibold">Rating: </p><p className="text-accent1 mb-4">{details.rating}</p>
            <p className="font-semibold">Studios: </p>{studios.map(studio => (<p className="text-accent1 mb-4" key={studio.mal_id}>{studio.name} </p>))}
            <p className="font-semibold">Episodes: </p><p className="text-accent1 mb-4">{details.episodes}</p>
            <p className="font-semibold">Status: </p><p className="text-accent1 mb-4">{details.status}</p>
            <p className=" font-semibold mb-2">Genres: </p>{genres.map(genre => (<p className="text-accent1" key={genre.mal_id}>{genre.name} </p>))}
        </div>
        </>
    )
}

AnimeDetails.propTypes = {
    details: PropTypes.object
}

export default AnimeDetails;