import React from "react";
import PropTypes from 'prop-types'
import Title from "../../Title/Title";
// import useFetch from "../../../actions/useFetch";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DetailsResult } from "../detailsResult";

const AnimeDetails = ()=>{
    
    // const {id} = useParams();
    // const url = `http://localhost:5000/details/${id}`;
    
    // const {ani_details} = useFetch(url);
    // const {genres} = ani_details;
    // const {studios} = ani_details;
    const {ani_details} = useContext(DetailsResult);
    return(
        <>
                {ani_details ? 
                
                <div>
                <Title title={'Anime Details'}/>
                <div className='bg-accent2 rounded-md pl-4 p-4 text-complement1 w-60 drop-shadow-xl'>
                    <p className="font-semibold">Date aired: </p><p className="text-accent1 mb-4">{ani_details.aired.string}</p>
                    <p className="font-semibold">Score: </p> <p className="text-accent1 mb-4">{ani_details.score}</p>
                    <p className="font-semibold">Rating: </p><p className="text-accent1 mb-4">{ani_details.rating}</p>
                    <p className="font-semibold">Studios: </p><div>{ani_details.studios.map(studio => (<p className="text-accent1 mb-4" key={studio.mal_id}>{studio.name} </p>))}</div>
                    <p className="font-semibold">Episodes: </p><p className="text-accent1 mb-4">{ani_details.episodes}</p>
                    <p className="font-semibold">Status: </p><p className="text-accent1 mb-4">{ani_details.status}</p>
                    <p className=" font-semibold mb-2">Genres: </p><div>{ani_details.genres.map(genre => (<p className="text-accent1" key={genre.mal_id}>{genre.name} </p>))}</div>
                </div>

                </div>
                : (<h1>loading</h1>)
            
            }
        </>
    )
}

AnimeDetails.propTypes = {
    ani_details: PropTypes.object
}

export default AnimeDetails;