import React from 'react';
import useFetch from '../../actions/useFetch';
import { useParams } from 'react-router-dom';
// import ListItem from '../Home/ListItem';
import Title from '../Title/Title';

const User = ()=>{
    const {id} = useParams();
    const url = `/profile/${id}`;
    const user = useFetch(url);

    return(
        <>
            <Title title={user.username + "'s profile"}/>

            <Title title={'Bio'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>lorem ipsun</div>

            <Title title={'Anime Playlist'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
               {/* {user && user.comments.map(comment => {<ListItem ani_details={comment}/>})}  */}
            </div>

            <Title title={'Comments made'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
                {user && user.comments.map(comment => (<p key={comment._id}>{`" ${comment.body} "`} on anime: </p>))}
            </div>
        </>

    )
}

export default User;