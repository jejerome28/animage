import React from "react";
import { useState, useEffect } from "react";
import { getAnime } from "../api/fetch";

//set custom hook to be used by the component to fetch data
const useFetch = (url, params) => {
   const [isLoading, setLoading] = useState(true);
   const [res, setRes] = useState([]);
   useEffect(()=>{
      
      const animes = async()=>{
         try{
            const results = await getAnime(url, params);
            setRes(results);
            setLoading(false);
            if(isLoading){
               {return(<><h1>loading</h1></>)}
            }
         }catch(e){
            console.log(e)
         }

      }
      animes()
   },[])

   //returns array of object
   return res
}

export default useFetch;
