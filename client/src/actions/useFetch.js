import { useState, useEffect } from "react";
import { getAnime } from "../api/fetch";

//set custom hook to be used by the component to fetch data
const useFetch = (url, params) => {
   const [res, setRes] = useState([]);
   // const [sznAni, setSznAni] = useState([]);
   useEffect(()=>{
      
      const animes = async()=>{
         try{
            const res = await getAnime(url, params)
            // const {topAnimes, seasonAnime} = res
            setRes(res)
            // setSznAni(seasonAnime)
         }catch(e){
            console.log(e)
         }

      }
      animes()
   },[url,params])

   //returns array of object
   return res
}

export default useFetch;
