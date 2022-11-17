import React from "react";
import { getDetails } from "../../actions/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = ()=>{

    const [allDetails, setDetails]= useState([])

    const {id} = useParams();
    useEffect(()=>{
        getDetails(setDetails,id);
    },[id])

    //TODO use the objects rendered to display details
    //not working right now check how to render object using object keys tom
    return(
        <>
        <h1>Details</h1>
        <p>{allDetails.ani_details.title_english}</p>
        </>
    )
}

export default Details;