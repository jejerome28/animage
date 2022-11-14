import React, {useState, useEffect} from "react";
import style from './Slider.module.css'
import Card from "../Card/Card";
import getAnime from "../../../api/fetch";
import Title from "../../Title/Title";



const Slider = () =>{
    const[results, setResult]=useState([])
    
    const getSznAni = async ()=> {
        const sznAni = await getAnime('https://api.jikan.moe/v4/seasons/now', {page:1})
        setResult(sznAni.slice(0,10))
    }
    

    useEffect(()=>{
        getSznAni()
    },[])
    

    
    return(
        <>
        <div className={style.title}>
            <Title title={'Top season anime'}/>
            <div className={style.wrapper}>
                {results.map(ani=>(<Card anime={ani} key={ani.mal_id}/>))}
            </div>
        </div>
        </>
    )
}

export default Slider