import React from "react";
import style from '../Details.module.scss'
import PropTypes from 'prop-types'
import Title from "../../Title/Title";

const AnimeDetails = ({details})=>{
    const {genres} = details;
    const {studios} = details;
    return(
        <>
        <Title title={'Anime Details'}/>
        <div className={style.ani_details}>
            <p>Date aired: {details.aired.string}</p>
            <p>Score: {details.score}</p>
            <p>Rating: {details.rating}</p>
            <span>Studios: </span>{studios.map(studio => (<span key={studio.mal_id}>{studio.name}</span>))}
            <p>Episodes: {details.episodes}</p>
            <p>Status: {details.status}</p>
            <span>Genres: </span>{genres.map(genre => (<span key={genre.mal_id}>{genre.name}</span>))}
        </div>
        </>
    )
}

AnimeDetails.propTypes = {
    details: PropTypes.object
}

export default AnimeDetails;