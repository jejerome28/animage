import React, { Suspense } from "react";
import style from './Card.module.scss'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({anime})=>{
    return(
        <>
        <div className={style.card}>
            <Suspense fallback={(<h1>loading..</h1>)}>

                <Link to={`/details/`+ anime.mal_id}>
                    <img src={anime.images.webp.image_url} alt='anime pic' ></img>
                </Link>
                    <p>{anime.title}</p>
            </Suspense>
        </div>
        </>
    )
}

Card.propTypes = {
    anime: PropTypes.object
}

export default Card