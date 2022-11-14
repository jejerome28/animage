import React, {useState, useEffect} from "react";
import style from './Anilist.module.css'
import getAnime from "../../../api/fetch";
import ListItem from "./ListItem/ListItem";
import Title from "../../Title/Title";


const Anilist = ()=>{
    const [anilist, setAnilist] = useState([])

    const getTopAni = async ()=> {
        const topAni = await getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'favorite', page:1});
        setAnilist(topAni);
    }
    

    useEffect(()=>{
        getTopAni()
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
