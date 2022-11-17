import React, {useState, useEffect} from "react";
import style from './Anilist.module.css'
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
       <div className={style.title}>
       <Title title={'Top popular anime'}/>
            <div className={style.wrapper}>
                {anilist.map(ani=>(<ListItem anime={ani} key={ani.mal_id}/>))}
            </div>
       </div>
        </>
   ) 

}

export default Anilist;
