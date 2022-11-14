import React from "react";
import style from './Layout.module.css'
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const Layout = ()=> {
    return(
        <>
        <div className={style.wrapper}>
            <div className={style.nav}>
                <Navbar/>
            </div>
            <div className={style.home}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="browse" element={<Details/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Layout