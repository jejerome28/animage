import React from "react";
import style from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className={style.wrapper}>
            <Link to='/'>Logo</Link>
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse</Link>
            <Link to='/forum'>Forum</Link>
            <button className="login">Login</button>
        </div>
        </>
    )
}

export default Navbar