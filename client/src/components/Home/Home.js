import React from "react";

import style from './Home.module.css'
import Slider from "./Slider/Slider";


const Home = () =>{
    return(
        <>
        <div className={style.wrapper}>
            <img src="https://wallpaper.dog/large/20522188.jpg" alt="spirited away pic"></img>
            <Slider/>
        </div>
        </>
    )
}

export default Home