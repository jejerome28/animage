import React from 'react';
import useFetch from '../../actions/useFetch';
import { useParams } from 'react-router-dom';
// import ListItem from '../Home/ListItem';
import Title from '../Title/Title';

const User = ()=>{
    const {id} = useParams();
    const url = `/profile/${id}`;
    const {username, comments, playlist} = useFetch(url);
    
    return(
        <>
            <Title title={username + "'s profile"}/>

            <Title title={'Bio'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>lorem ipsun</div>

            <Title title={'Anime Playlist'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
                {playlist && playlist.map(playlist => (<p key={playlist._id}>{playlist.body}</p>))}
            </div>

            <Title title={'Comments made'}/>
            <div className='bg-accent2 p-4 text-accent1 font-regular drop-shadow-xl leading-6 rounded-md mb-12'>
                {comments && comments.map(comment => (<p key={comment._id}>{`" ${comment.body} "`} on anime: </p>)) }
            </div>
        </>

    )
}

export default User;