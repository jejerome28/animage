import React from "react";
import style from '../Details.module.css'
import PropTypes from 'prop-types'


const Synopsis = ({synopsis})=>{
    return(
        <>
        <div className={style.synopsis}>
            <p>{synopsis.synopsis}</p>
        </div>
        </>
    )
}


Synopsis.propTypes = {
    synopsis: PropTypes.string
}

export default Synopsis;