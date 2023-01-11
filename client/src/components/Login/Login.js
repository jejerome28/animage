import React from "react";
import { Link, Navigate } from "react-router-dom";
import Title from "../Title/Title";
import PropTypes from 'prop-types';
// import { useState } from "react";
// import axios from 'axios';
import { useContext } from "react";
import { LoggedUser } from "../Layout/loggedContext";

export default function Login ({setUsername,setPassword, handleSubmit}) {
    //set the state for the values of forms
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [user, setUser] = useState('');

    // //store in an object to be sent to the server
    // const results = {username: username, password:password} ;

    // //send the object to the server for storage
    // const handleSubmit = async (e) =>{
    //     try{
    //     e.preventDefault();

    //         const res = await axios({
    //             method:'POST',
    //             data: results,
    //             withCredentials:true,
    //             url: '/login'
    //         })
            
    //         if(res.status === 200){
    //             setUser(res.data.username);
    //             console.log('form sent');
    //         }
    //         else{
    //             console.log('error occured');
    //         }

    //     }
    //     catch(e){
    //         console.log(e.message)
    //     }
    //     // postNewUser('/login', results);
    //     // console.log(results);
        
    // }
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

