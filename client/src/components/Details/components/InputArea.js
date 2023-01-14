import React from "react"
import PropTypes from 'prop-types'
import { useState, useContext } from "react"
import axios from 'axios'
import { DetailsResult } from "../detailsResult"
import Comments from "./Comments"

const InputArea = ({children})=> {
    //get context and set as initial value of the state of comments
    const {id, comments} = useContext(DetailsResult);
    const [comment, setComment] = useState(comments);
    const [input, setInput ] = useState('');

    //to send the comment and receive the updated comments then set as the comment state
    const handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            
            const {data} = await axios({
                method: 'POST',
                data: {addComment:input},
                url: `/details/${id}/post_comment`
            })
           
            setComment(data);
            setInput('');
            console.log(data);
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    return(
        <>
            {children}
            {/* if the comment is undefined, use the context first as initial state */}
            {comment && <Comments comments={comment}/> || <Comments comments={comments}/>}

            <form onSubmit={handleSubmit}>
                <textarea className='resize-none w-full rounded-md p-1' onChange={e=>setInput(e.target.value)} value={input} placeholder="Tell others what do you think...">
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
