import React from "react";
import PropTypes from 'prop-types'

const Title = ({title})=>{
    return(
        <>
        <h2 className='text-2xl mb-4 text-complement1 font-semibold'>
            {title}
        </h2>
        </>
    )
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;