import React from "react";
import Card from "./Card";
import ListItem from "./ListItem";

const Home = () =>{
    return(
        <>
        <div className="flex flex-col w-slider-w mb-12 mt-12">
            <Card/>
            <ListItem />
        </div>
        </>
    )
}

export default Home