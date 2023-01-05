import React from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";
import Title from "../../Title/Title";

const Comments = ()=>{
    const {comments} = useContext(DetailsResult);
    // const {user_id:{username}} = comments
    return(
        <>
            <Title title={'Comments'}/>
            {comments ?
            comments.map(comment => (
            <p key={comment._id}>{comment.body} ----- <span>{comment.user_id.username}</span></p>

            ))
            : (<h1>loading</h1>)
        }
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.object
}

export default Comments
