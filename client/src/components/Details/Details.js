import React from "react";
import { useParams } from "react-router-dom";
import Image from "./components/Image";
import AnimeDetails from "./components/AnimeDetails";
// import Synopsis from "./components/Synopsis";
// import Characters from "./components/Characters";
import PropTypes from 'prop-types'
// import Title from "../Title/Title";
// import Comments from "./components/Comments";
import useFetch from "../../actions/useFetch";
import { DetailsResult } from "./detailsResult";
import Characters from "./components/Characters";
import Synopsis from "./components/Synopsis";
import Comments from "./components/Comments";

const Details = ()=>{

    // const {id} = useParams();
    // const url = `http://localhost:5000/details/${id}`;
    
    // const {ani_details, cast_details, comments} = useFetch(url);
const {id} = useParams();
const url = `http://localhost:5000/details/${id}`;


const {ani_details,cast_details, comments} = useFetch(url);
    
    return(
        <>  
        <DetailsResult.Provider value={{ani_details, cast_details, comments}}>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-start-4 col-end-6'>
                <Image/>
                <AnimeDetails/>
                {/* {ani_details ? <Image ani_details={ani_details}/> : (<h1>loading</h1>)}
                {ani_details ? <AnimeDetails ani_details={ani_details}/> : (<h1>loading</h1>)} */}
            </div>

            <div className='col-start-6 col-end-11'>

                <Synopsis/>
                <Characters/>
                {/* {ani_details  ? <Synopsis synopsis={ani_details}/> : (<h1>loading..</h1>)}
            
                <Title title={'Characters and Voice Actors'}/>
                <div className="overflow-auto h-screen mb-12">
                    {cast_details ? 
                        cast_details.map(cast => (<Characters casts={cast} key={cast.character.mal_id}/>)) : (<h1>loading..</h1>)
                    }
                </div> */}
            </div>
        
            <div className="col-start-5 col-end-10 mb-6 px-4 py-3 bg-accent2 text-complement1 rounded-md drop-shadow-xl">
                    <Comments/>
                    <form>
                        <textarea  className='resize-none w-full rounded-md p-1' placeholder="Tell others what do you think...">
                        </textarea>
                        <button className="block ml-auto rounded-md bg-complement1 text-accent2 p-1 m-2" type="submit">Comment!</button>
                    </form>
        

            </div>
            
        </div>

        </DetailsResult.Provider>
        </>
    )
}

Details.propTypes = {
    allDetails: PropTypes.object
}

export default Details;