import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";
import { Link } from "react-router-dom";

const Comments = ({comments})=>{
    
    return(
        <>
            <Title title={'Comments'}/>
            {comments ?  comments.map(comment => ( <p key={comment._id}>{comment.body} ----- <Link to={`/profile/${comment.user_id._id}`}>{comment.user_id.username}</Link></p>)) : (<h1>loading</h1>) }
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.array
}

export default Comments
