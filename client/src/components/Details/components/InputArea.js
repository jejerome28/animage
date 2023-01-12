import React from "react"
import PropTypes from 'prop-types'
import { useState, useContext } from "react"
import axios from 'axios'
import { DetailsResult } from "../detailsResult"

const InputArea = ({children})=> {
    const [comment, setComment] = useState('');
    
    const {id} = useContext(DetailsResult);

    const handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            
            const res = await axios({
                method: 'POST',
                data: {addComment:comment},
                url: `/details/${id}/post_comment`
            })
            
            console.log(res);
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    return(
        <>
            {children}
            <form onSubmit={handleSubmit}>
                <textarea className='resize-none w-full rounded-md p-1' onChange={e=>setComment(e.target.value)} placeholder="Tell others what do you think...">
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
