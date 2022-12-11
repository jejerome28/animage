import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import {  Routes, Route} from 'react-router-dom'
import Login from "../Login/Login";
import Signup from "../Login/Signup";

const Layout = ()=> {
    return(
        <>
        <div className= 'font-sans bg-main-color min-h-screen'>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    {/* to show details components when an anime link is clicked */}
                    <Route path="/details/:id" element={<Details/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
                <Footer/>
        </div>
        </>
    )
}

export default Layout