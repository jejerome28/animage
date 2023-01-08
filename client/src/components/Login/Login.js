import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { useState } from "react";
// import { getUser } from "../../api/fetch";
import axios from 'axios';

export default function Login () {
    //set the state for the values of forms
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState('');

    //store in an object to be sent to the server
    const results = {username: username, password:password} ;

    //send the object to the server for storage
    const handleSubmit = async (e) =>{
        try{
        e.preventDefault();

        // const res = await axios('/login', results)
        const res = await axios({
            method:'POST',
            data: results,
            withCredentials:true,
            url: '/login'
        })

        if(res.status === 200){
            console.log('form sent');
            // return redirect("/")
        }
        else{
            console.log('error occured');
        }

        console.log(res)
        }
        catch(e){
            console.log(e)
        }
        // postNewUser('/login', results);
        // console.log(results);
        
    }
    return(
        <>
            <div className="m-auto w-fit min-h-screen ">
                <Title title={'Login page'}/>
                <form onSubmit={handleSubmit} className="p-4 bg-accent2 rounded-md drop-shadow-xl">
                    <input type={'text'} id='username' placeholder="Username" onChange={e => setUsername(e.target.value)} className="block mb-4 w-full"></input>
                    <input type={'password'} id='password' placeholder="Password" onChange={e => setPassword(e.target.value)} className="block mb-4 w-full"></input>
                    <button type="submit" className="bg-accent1 p-1 rounded-md mr-4">Login</button>
                    <Link to="/signup">{"Don't have an account?"}</Link>
                </form>
            </div>
        </>
    )
}