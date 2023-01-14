import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";

const Comments = ({comments})=>{
    
    return(
        <>
            <Title title={'Comments'}/>
            {comments ?  comments.map(comment => ( <p key={comment._id}>{comment.body} ----- <span>{comment.user_id.username}</span></p>)) : (<h1>loading</h1>)
        }
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.array
}

export default Comments
