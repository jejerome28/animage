import React from "react";
import Title from "../../Title/Title";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { LoggedUser } from "../../Layout/loggedContext";
import axios from 'axios';

const Image = ({ani_details, id})=>{
    //use anime details result 
    const user = useContext(LoggedUser);
    
    const handleClick = async () => {
        try{
            const url = `/update_profile/${user._id}`;
            
            //data to be sent to backend
            const data = {anime_id:id, ani_title: ani_details.title_english, userId:user._id};
            await axios.post(url,data);
        }
        catch(e){
            console.log(e.message)
        }
    }
    return(
        <>
            <Title title={ani_details.title_english}/>
            <img src={ani_details.images.webp.image_url} className='h-97 rounded-lg w-60 mb-3 ' alt={'anime pic'}></img>
            {user && <button className="mb-12 mr-4" onClick={handleClick}>Add</button>}
            
        </>

            
    )
}

Image.propTypes = {
    ani_details: PropTypes.object,
    id: PropTypes.string
}

export default Image;