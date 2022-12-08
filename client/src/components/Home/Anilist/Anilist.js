import React, {useState, useEffect} from "react";
import ListItem from "./ListItem/ListItem";
import Title from "../../Title/Title";
import { getTopAni } from "../../../actions/getData";


const Anilist = ()=>{
    const [anilist, setAnilist] = useState([])

    useEffect(()=>{
        getTopAni(setAnilist)
    },[])
    
   return(
        <>
       <div className='flex flex-col w-slider-w mb-12 drop-shadow-xl'>
       <Title title={'Top popular anime'}/>
            <div className='flex flex-col'>
                {anilist.map(ani=>(<ListItem anime={ani} key={ani.mal_id}/>))}
            </div>
       </div>
        </>
   ) 

}

export default Anilist;
