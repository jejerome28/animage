import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

//set custom hook to be used by the component to fetch data
const useFetch = (url) => {
   const [isLoading, setLoading] = useState(true);
   const [res, setRes] = useState([]);
   useEffect(()=>{
      
      setLoading(true);
      const animes = async()=>{
         try{
            const results = await axios.get(url);
            setRes(results.data);
            setLoading(false);
            
            if(isLoading) return(<><h1>loading</h1></>)
            
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
