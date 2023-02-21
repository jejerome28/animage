import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedUser } from "../Layout/loggedContext";
import PropTypes from 'prop-types'

const Navbar = ({handleLogout}) => {
    //get user logged in using context
    const [show, setShow] = useState(false);
    const user = useContext(LoggedUser);
    
    const handleClick = () => {
        if(show === true) {
            setShow(false)
            return;
        }
        setShow(true);
    }
    return(
        <>
        <div className="text-center bg-complement1 py-4 border-b-2 border-accent1 lg:hidden ">
            <div onClick={handleClick} className="space-y-2 pl-4 float-left">
                <div className="w-8 h-0.5 bg-accent1"></div>
                <div className="w-8 h-0.5 bg-accent1"></div>
                <div className="w-8 h-0.5 bg-accent1"></div>
            </div>
            <Link to='/' className="text-accent1 text-sm font-bold mr-8 ">ANIMAGE</Link>
        </div>
        {show && 
            <nav  className="flex flex-col bg-complement1 h-screen">
                <Link onClick={handleClick} to='/' className="text-accent1 text-sm font-bold m-4">HOME</Link>
                <Link onClick={handleClick} to='/browse' className="text-accent1 text-sm font-bold m-4">BROWSE</Link>
                <Link onClick={handleClick} to='/forum' className="text-accent1 text-sm font-bold m-4">FORUM</Link>
            </nav>
        }
        <div className= 'hidden lg:flex justify-center bg-complement1 mb-14 drop-shadow-xl tracking-widest'>
            <Link to='/' className="text-accent1 text-sm font-bold m-4 mr-auto ml-36">LOGO</Link>
            <Link to='/' className="text-accent1 text-sm font-bold m-4">HOME</Link>
            <Link to='/browse' className="text-accent1 text-sm font-bold m-4">BROWSE</Link>
            <Link to='/forum' className="text-accent1 text-sm font-bold m-4">FORUM</Link>
            {
                user ? 
                <>
                <Link to={`/profile/${user._id}`}className="text-accent1 text-sm font-bold m-4 ml-auto mr-2">Hello, {user.username}</Link> 
                <Link to='/' className="text-accent1 text-sm font-bold m-4 mr-8">
                    <button type="submit" onClick={handleLogout}>Logout</button>
                </Link>
                </>
                :
                <Link to='/login' className="text-accent1 text-sm font-bold m-4 ml-auto mr-36">LOGIN</Link>
            }
        </div>
        </>
    )
}

Navbar.propTypes = {
    handleLogout: PropTypes.func
}

export default Navbar