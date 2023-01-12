import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedUser } from "../Layout/loggedContext";
import PropTypes from 'prop-types'

const Navbar = ({handleLogout}) => {
    //get user logged in using context
    const user = useContext(LoggedUser);
    return(
        <>
        <div className= 'flex justify-center bg-complement1 mb-14 drop-shadow-xl tracking-widest'>
            <Link to='/' className="text-accent1 text-sm font-bold m-4 mr-auto ml-36">LOGO</Link>
            <Link to='/' className="text-accent1 text-sm font-bold m-4">HOME</Link>
            <Link to='/browse' className="text-accent1 text-sm font-bold m-4">BROWSE</Link>
            <Link to='/forum' className="text-accent1 text-sm font-bold m-4">FORUM</Link>
            {
                user ? 
                <>
                <Link to='/login' className="text-accent1 text-sm font-bold m-4 ml-auto mr-2">Hello, {user.username}</Link> 
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