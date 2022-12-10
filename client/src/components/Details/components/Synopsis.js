import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";


const Synopsis = ({synopsis})=>{
    return(
        <>
        <Title title={'Synopsis'}/>
        <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
            <p className="leading-6">{synopsis.synopsis}</p>
        </div>
        </>
    )
}


Synopsis.propTypes = {
    synopsis: PropTypes.string
}

export default Synopsis;