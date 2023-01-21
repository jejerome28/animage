import React from "react";
import PropTypes from 'prop-types'

const LoadingList = ({number})=>{
    return(
      <>
            {Array(number).fill(true).map(key => (
              <div key={key} className='flex mb-4 p-2 bg-accent2 rounded-md '>
                      <div className="mr-4 w-16 p-2 rounded-md bg-accent1 animate-pulse" ></div>
                      <div className="w-40 mt-3 animate-pulse">
                          <p className="mb-12  bg-accent1 rounded h-2"></p>
                          <p className="mb-3  bg-accent1 rounded h-2"></p>
                      </div>
              </div>
            ))}
      </>
    )
}

LoadingList.propTypes ={
    number: PropTypes.number
}

export default LoadingList;
