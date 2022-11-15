import React from "react"
import style from './ListItem.module.css'

const ListItem = ({anime})=>{
    return(
        <>
        <div className={style.list}>
                <img src={anime.images.webp.image_url} alt='anime pic' ></img>
                <div className={style.details}>
                    <a href={`/details/`+ anime.mal_id}>{anime.title}</a>
                    {anime.genres.map((genre, index) => (<span key={anime.mal_id + index}>{genre.name}</span>))}
                </div>
        </div>
        </>
    )
}

export default ListItem
