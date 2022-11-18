import React from "react";
import style from '../Details.module.css'


const Synopsis = ({synopsis})=>{
    return(
        <>
        <div className={style.synopsis}>
            <p>{synopsis.synopsis}</p>
        </div>
        </>
    )
}

export default Synopsis;