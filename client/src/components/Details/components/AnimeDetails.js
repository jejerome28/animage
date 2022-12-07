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
            <p>Date aired: </p> <p>{details.aired.string}</p>
            <p>Score: </p> <p>{details.score}</p>
            <p>Rating: </p><p>{details.rating}</p>
            <p>Studios: </p>{studios.map(studio => (<p key={studio.mal_id}>{studio.name} </p>))}
            <p>Episodes: </p><p>{details.episodes}</p>
            <p>Status: </p><p></p>
            <p>Genres: </p>{genres.map(genre => (<p key={genre.mal_id}>{genre.name} </p>))}
        </div>
        </>
    )
}

AnimeDetails.propTypes = {
    details: PropTypes.object
}

export default AnimeDetails;