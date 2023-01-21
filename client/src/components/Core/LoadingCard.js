import React from "react";
import PropTypes from 'prop-types'

const LoadingCard = ({number})=>{
    return(
        <>
        <div className='flex w-slider-w mb-12 flex-wrap animate-pulse'>
            {Array(number).fill(true).map(key => (
            <div key={key} className='mr-4 items-center w-40 drop-shadow-xl cursor-pointer hover:scale-125 ease-in duration-300 basis-32 mb-3'>
                    <div  className='rounded-md w-22 h-56 mb-4 bg-accent1' ></div>
                    <p className="h-2 rounded bg-accent1 mb-3"></p>
                    <p className="h-2 rounded bg-accent1"></p>
            </div>
            ))}
        </div>
        </>
    )
}

LoadingCard.propTypes ={
    number: PropTypes.number
}

export default LoadingCard;

