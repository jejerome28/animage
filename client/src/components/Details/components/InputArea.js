import React from "react"
import PropTypes from 'prop-types'

const InputArea = ({children})=> {
    
    return(
        <>
            {children}
            <form>
                <textarea  className='resize-none w-full rounded-md p-1' placeholder="Tell others what do you think...">
                </textarea>
                <button className="block ml-auto rounded-md bg-complement1 text-accent2 p-1 m-2" type="submit">Comment!</button>
            </form>
        </>
    )
}

InputArea.propTypes = {
    children: PropTypes.any
}

export default InputArea
