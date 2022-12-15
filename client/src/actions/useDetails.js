import React from "react";
import { useState, useEffect } from "react";
import { getAnime } from "../api/fetch";

//set custom hook to be used by the component to fetch data
const useDetails = (url, params) => {
    const [isLoading, setLoading] = useState(true)
    const [ani_details, setAniDetails] = useState([]);
    const [casts, setCasts] = useState('');
    const [comments, setComments] = useState([]);

   useEffect(()=>{
      
      const animes = async()=>{
         try{
            const results = await getAnime(url, params);
            const {ani_details} = results;
            const {casts} = results;
            const {comments} = results;
            
            setAniDetails(ani_details);
            setCasts(casts);
            setComments(comments);
            setLoading(false);
            
            if(isLoading){
               {return(<><h1>loading</h1></>)}
            }
            
            console.log(ani_details,casts,comments);
            console.log(results);
         }catch(e){
            console.log(e)
         }

      }
      animes()
   },[url,params])

   //returns array of object
   return {ani_details, casts, comments};
}

export default useDetails;

