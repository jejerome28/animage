import React from "react";
import style from '../Details.module.css'
import PropTypes from 'prop-types'

const AnimeDetails = ({details})=>{
    return(
        <>
        <div className={style.ani_details}>
            <p>Date aired: {details.aired.string}</p>
            <p>Score: {details.score}</p>
            <p>Rating: {details.rating}</p>
            <p>Studio: {details.studios[0].name}</p>
        </div>
        </>
    )
}

AnimeDetails.propTypes = {
    details: PropTypes.object
}

export default AnimeDetails;