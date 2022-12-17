import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';
// import useFetch from "../../../actions/useFetch";
// import useDetails from "../../../actions/useDetails";
// import { useParams } from "react-router-dom";

const Image = ({ani_details})=>{
    
    // const {id} = useParams();
    // const {anime} = useDetails(id);

    
    return(
        <>
                (<div>
                    <Title title={ani_details.title_english}/>
                    <img src={ani_details.images.webp.image_url} className='h-97 rounded-lg w-60 mb-12' alt={'anime pic'}></img>
                </div>)
            
        </>

            
    )
}

Image.propTypes = {
    ani_details: PropTypes.object
}

export default Image;