import React from "react";
import style from './Layout.module.css'
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import {  Routes, Route} from 'react-router-dom'

const Layout = ()=> {
    return(
        <>
        <div className={style.wrapper}>
            <div className={style.nav}>
                <Navbar/>
            </div>
            <div className={style.home}>
                <Routes>
                    <Route index element={<Home/>}/>
                    {/* to show details components when an anime link is clicked */}
                    <Route path="/details/:id" element={<Details/>}/>
                </Routes>
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Layout