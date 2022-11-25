import React, {Suspense} from "react";

import style from './Home.module.scss'
import Slider from "./Slider/Slider";
import Anilist from "./Anilist/Anilist";


const Home = () =>{
    return(
        <>
        <Suspense fallback={(<h1>loading..</h1>)}>

            <div className={style.wrapper}>
                <img src="https://wallpaper.dog/large/20522188.jpg" alt="spirited away pic"></img>
                <Slider/>
                <Anilist/>
            </div>
        </Suspense>
        </>
    )
}

export default Home