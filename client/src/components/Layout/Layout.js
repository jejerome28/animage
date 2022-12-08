import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import {  Routes, Route} from 'react-router-dom'

const Layout = ()=> {
    return(
        <>
        <div className= 'font-sans bg-main-color'>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    {/* to show details components when an anime link is clicked */}
                    <Route path="/details/:id" element={<Details/>}/>
                </Routes>
                <Footer/>
        </div>
        </>
    )
}

export default Layout