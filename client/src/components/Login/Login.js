import React from "react";
import { Link, Navigate } from "react-router-dom";
import Title from "../Title/Title";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { LoggedUser } from "../Layout/loggedContext";

export default function Login ({setUsername,setPassword, handleSubmit}) {
    
    //to get the user logged in
    const user = useContext(LoggedUser);
    return(
        <>
            {user ? <Navigate to={'/'}/>
                :
        
            <div className="m-auto w-fit min-h-screen ">
                <Title title={'Login page'}/>
                <form onSubmit={handleSubmit} className="p-4 bg-accent2 rounded-md drop-shadow-xl">
                    <input type={'text'} id='username' placeholder="Username" onChange={e => setUsername(e.target.value)} className="block mb-4 w-full"></input>
                    <input type={'password'} id='password' placeholder="Password" onChange={e => setPassword(e.target.value)} className="block mb-4 w-full"></input>
                    <button type="submit" className="bg-accent1 p-1 rounded-md mr-4">Login</button>
                    <Link to="/signup">{"Don't have an account?"}</Link>
                </form>
            </div>
        }
        </>
    )
}

Login.propTypes = {
    setUsername: PropTypes.func,
    setPassword: PropTypes.func,
    handleSubmit: PropTypes.func
}

