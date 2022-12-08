import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import { getSznAni } from "../../../actions/getData";
import Title from "../../Title/Title";



const Slider = () =>{
    const[results, setResult]=useState([])
    
    useEffect(()=>{
        getSznAni(setResult)
    },[])
    

    
    return(
        <>
        <div className='flex flex-col w-slider-w mb-12 mt-12'>
            <Title title={'Top season anime'}/>
            <div className='flex w-slider-w mb-12'>
                {results.map(ani=>(<Card anime={ani} key={ani.mal_id}/>))}
            </div>
        </div>
        </>
    )
}

export default Slider