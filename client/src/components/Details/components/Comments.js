import React from "react";
import PropTypes from 'prop-types'


const Comments = ({comments})=>{
    const {user_id:{username}} = comments
    return(
        <>
            <p>{comments.body} ----- <span>{username}</span></p>
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.object
}

export default Comments
