import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

//set custom hook to be used by the component to fetch data
const useFetch = (url) => {
   const [isLoading, setLoading] = useState(false);
   const [res, setRes] = useState([]);
   useEffect(()=>{
      
      const animes = async()=>{
         try{
            setLoading(true);
            const results = await axios.get(url);
            setRes(results.data);
            setLoading(false);
            
            if(isLoading) return(<><h1>nagloload</h1></>)
            
         }catch(e){
            console.log(e)
         }

      }
      animes()
   },[url])

   //returns array of object
   return res
}

export default useFetch;
