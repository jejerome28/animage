import React from "react"
import { Link } from "react-router-dom"
import style from './ListItem.module.css'
import PropTypes from 'prop-types'

const ListItem = ({anime})=>{
    return(
        <>
        <div className={style.list}>
                <img src={anime.images.webp.image_url} alt='anime pic' ></img>
                <div className={style.details}>
                    <Link to={`/details/`+ anime.mal_id}>{anime.title}</Link>
                    {anime.genres.map((genre, index) => (<span key={anime.mal_id + index}>{genre.name}</span>))}
                </div>
        </div>
        </>
    )
}

ListItem.propTypes = {
    anime: PropTypes.object
}


export default ListItem
