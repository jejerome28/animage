import React, {Suspense} from "react";

import Slider from "./Slider/Slider";
import Anilist from "./Anilist/Anilist";


const Home = () =>{
    return(
        <>
        <Suspense fallback={(<h1>loading..</h1>)}>

            <div className="flex flex-col items-center">
                <Slider/>
                <Anilist/>
            </div>
        </Suspense>
        </>
    )
}

export default Home