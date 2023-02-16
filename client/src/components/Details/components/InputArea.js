import React from "react"
import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from 'axios'
import Comments from "./Comments"

const InputArea = ({id, comments, children})=> {
    const url = 'https://animage.onrender.com';
    // set initial value of the state of comments
    const [comment, setComment] = useState([]);
    const [input, setInput ] = useState('');
    
    //get the comments from db
    useEffect(()=>{
        try{
            setComment(comments);
        }
        catch(e){
            console.log(e)
        }
    },[])

    //to send the comment and receive the updated comments then set as the comment state
    const handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            
            const res = await axios({
                method: 'POST',
                data: {addComment:input},
                url: `${url}/details/${id}/post_comment`
            })
           
            setComment(res.data.comments);
            setInput('');
            // console.log(res);
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    return(
        <>
            {children}
        
            <Comments comments={comment}/>
        

            <form onSubmit={handleSubmit}>
                <textarea className='resize-none w-full rounded-md p-1' onChange={e=>setInput(e.target.value)} value={input} placeholder="Tell others what do you think...">
                </textarea>
                <button className="block ml-auto rounded-md bg-complement1 text-accent2 p-1 m-2" type="submit">Comment!</button>
            </form>
        </>
    )
}

InputArea.propTypes = {
    children: PropTypes.any,
    comments: PropTypes.array,
    id: PropTypes.string
}

export default InputArea
