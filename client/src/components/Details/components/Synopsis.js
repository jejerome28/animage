import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";


const Synopsis = ({ani_details})=>{
    
    return(
        <>
        {ani_details ?
        <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
        <Title title={'Synopsis'}/>
            <p className="leading-6">{ani_details.synopsis}</p>
        </div>
        : (<h1>loading</h1>)
    }
        </>
    )
}


Synopsis.propTypes = {
    ani_details: PropTypes.object
}

export default Synopsis;