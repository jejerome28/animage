import React from "react";
// import { getDetails } from "../../actions/getData";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Image from "./components/Image";
import AnimeDetails from "./components/AnimeDetails";
// import Synopsis from "./components/Synopsis";
// import Characters from "./components/Characters";
import PropTypes from 'prop-types'
// import Title from "../Title/Title";
// import Comments from "./components/Comments";


const Details = ()=>{

    // const [allDetails, setDetails]= useState([]);

    // const {id} = useParams();

    // useEffect(()=>{
    //     getDetails(setDetails,id);
    // },[id])
    
    // const {ani_details, cast_details, comments} = allDetails;

    //to use the objects rendered to display details
    return(
        <>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-start-4 col-end-6'>

                {/* {<Image/> ? <Image/> : (<h1>loading</h1>)} */}
                <Image/>
                {/* {ani_details  ?  
                <Image anime={ani_details}/> : (<h1>loading..</h1>)} */}

                {/* {<AnimeDetails/> ? <AnimeDetails/> : (<h1>loading</h1>)} */}
                <AnimeDetails/>
                {/* {ani_details  ?  
                <AnimeDetails details={ani_details}/> : (<h1>loading..</h1>)} */}
            </div>

            <div className='col-start-6 col-end-11'>

                {/* {ani_details  ?  
                <Synopsis synopsis={ani_details}/> : (<h1>loading..</h1>)}
            
                <Title title={'Characters and Voice Actors'}/>
                <div className="overflow-auto h-screen mb-12">
                    {cast_details ? 
                        cast_details.map(cast => (<Characters casts={cast} key={cast.character.mal_id}/>)) : (<h1>loading..</h1>)
                    }
                </div> */}
            </div>
        
            <div className="col-start-5 col-end-10 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl">
                    {/* <Title title={'Comments'}/>
                    <form>
                        <textarea  className='resize-none w-full rounded-md p-1' placeholder="Tell others what do you think...">
                        </textarea>
                        <button className="block ml-auto rounded-md bg-complement1 text-accent2 p-1 m-2" type="submit">Comment!</button>
                    </form>
                    {comments ? 
                        comments.map(comment => (<Comments comments={comment} key={comment._id}/>)) : (<h1>loading..</h1>)
                    } */}

            </div>
            
        </div>
        </>
    )
}

Details.propTypes = {
    allDetails: PropTypes.object
}

export default Details;