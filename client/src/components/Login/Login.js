import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";


export default function Login () {
    return(
        <>
            <div className="m-auto w-fit min-h-screen ">
                <Title title={'Login page'}/>
                <form method="POST"action="/login" className="p-4 bg-accent2 rounded-md drop-shadow-xl">
                    <input type={'text'} id='name' placeholder="Username" className="block mb-4 w-full"></input>
                    <input type={'password'} id='password' placeholder="Password" className="block mb-4 w-full"></input>
                    <button type="submit" className="bg-accent1 p-1 rounded-md mr-4">Login</button>
                    <Link to="/signup">{"Don't have an account?"}</Link>
                </form>
            </div>
        </>
    )
}