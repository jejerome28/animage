import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return(
        <>
        <div className={style.wrapper}>
            <a href="/">Logo</a>
            <a href="/">Home</a>
            <a href="/browse">Browse</a>
            <a href="/forum">Forum</a>
            <button className="login">Login</button>
        </div>
        </>
    )
}

export default Navbar