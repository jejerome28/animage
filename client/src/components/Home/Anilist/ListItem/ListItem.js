import React from "react"
import style from './ListItem.module.css'

const ListItem = ({anime})=>{
    return(
        <>
        <div className={style.list}>
                <img src={anime.images.webp.image_url} alt='anime pic' ></img>
                <p>{anime.title}</p>
        </div>
        </>
    )
}

export default ListItem
