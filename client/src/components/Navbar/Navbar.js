import React from "react";
// import style from './Navbar.module.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedUser } from "../Layout/loggedContext";

const Navbar = () => {
    const user = useContext(LoggedUser);
    console.log(user);
    return(
        <>
        <div className= 'flex justify-center bg-complement1 mb-14 drop-shadow-xl tracking-widest'>
            <Link to='/' className="text-accent1 text-sm font-bold m-4 mr-auto ml-36">LOGO</Link>
            <Link to='/' className="text-accent1 text-sm font-bold m-4">HOME</Link>
            <Link to='/browse' className="text-accent1 text-sm font-bold m-4">BROWSE</Link>
            <Link to='/forum' className="text-accent1 text-sm font-bold m-4">FORUM</Link>
            {
                user ? <Link to='/login' className="text-accent1 text-sm font-bold m-4 ml-auto mr-36">{user}</Link> 
                :
                <Link to='/login' className="text-accent1 text-sm font-bold m-4 ml-auto mr-36">LOGIN</Link>
            }
        </div>
        </>
    )
}

export default Navbar