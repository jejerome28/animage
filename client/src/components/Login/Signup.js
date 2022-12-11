import React from "react";
import Title from "../Title/Title";


export default function Signup () {
    return(
        <>
            <div className="m-auto w-fit min-h-screen ">
                <Title title={'Signup page'}/>
                <form method="POST"action="/login" className="p-4 bg-accent2 rounded-md drop-shadow-xl">
                    <input type={'text'} id='name' placeholder="Username" className="block mb-4  w-full"></input>
                    <input type={'password'} id='password' placeholder="Password" className="block mb-4 w-full"></input>
                    <input type={'email'} id='email' placeholder="Email" className="block mb-4 w-full"></input>
                    <button type="submit" className="bg-accent1 p-1 rounded-md mr-4">Create account</button>
                </form>
            </div>
        </>
    )
}
