import React from "react";
import style from '../Details.module.scss'
import PropTypes from 'prop-types'
import Title from "../../Title/Title";


const Synopsis = ({synopsis})=>{
    return(
        <>
        <Title title={'Synopsis'}/>
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