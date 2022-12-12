import React from "react";
import Title from "../Title/Title";
import { useState } from "react";
import { postNewUser } from "../../api/fetch";

export default function Signup () {
    
    //set the state for the values of forms
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //store in an object to be sent to the server
    const results = {username: username, password:password} ;

    //send the object to the server for storage
    const handleSubmit = async (e) =>{
        e.preventDefault();

        postNewUser('/signup', results);
        
    }

    return(
        <>
            <div className="m-auto w-fit min-h-screen ">
                <Title title={'Signup page'}/>
                <form onSubmit={handleSubmit} className="p-4 bg-accent2 rounded-md drop-shadow-xl">
                    <input type={'text'} id='username' onChange={e => setUsername(e.target.value)} placeholder="Username" className="block mb-4  w-full"></input>
                    <input type={'password'} id='password' onChange={e => setPassword(e.target.value)} placeholder="Password" className="block mb-4 w-full"></input>
                    {/* <input type={'email'} id='email' placeholder="Email" className="block mb-4 w-full"></input> */}
                    <button type="submit" className="bg-accent1 p-1 rounded-md mr-4">Create account</button>
                </form>
            </div>
        </>
    )
}
