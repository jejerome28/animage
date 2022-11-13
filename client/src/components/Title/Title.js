import React from "react";
import style from './Title.module.css'

const Title = ({title})=>{
    return(
        <>
        <h2 className={style.title}>
            {title}
        </h2>
        </>
    )
}

export default Title;