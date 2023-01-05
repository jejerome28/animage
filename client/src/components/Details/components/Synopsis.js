import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";


const Synopsis = ()=>{
    const {ani_details} = useContext(DetailsResult);
    
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
    synopsis: PropTypes.object
}

export default Synopsis;