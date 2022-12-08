import React from "react";
// import style from './Navbar.module.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className= 'flex justify-center bg-complement1 mb-4 drop-shadow-xl'>
            <Link to='/' className="text-accent1 text-sm font-bold m-4 mr-auto ml-36">LOGO</Link>
            <Link to='/' className="text-accent1 text-sm font-bold m-4">HOME</Link>
            <Link to='/browse' className="text-accent1 text-sm font-bold m-4">BROWSE</Link>
            <Link to='/forum' className="text-accent1 text-sm font-bold m-4">FORUM</Link>
            <Link to='/login' className="text-accent1 text-sm font-bold m-4 ml-auto mr-36">LOGIN</Link>
        </div>
        </>
    )
}

export default Navbar