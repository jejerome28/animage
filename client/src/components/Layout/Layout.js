import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import {  Routes, Route} from 'react-router-dom'
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Browse from "../Browse/Browse";
import { useState } from "react";
import axios from 'axios';
import { LoggedUser } from "./loggedContext";

const Layout = ()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    //store in an object to be sent to the server
    const results = {username: username, password:password} ;

    //send the object to the server for storage
    const handleSubmit = async (e) =>{
        try{
        e.preventDefault();

            const res = await axios({
                method:'POST',
                data: results,
                withCredentials:true,
                url: '/login'
            })
            
            if(res.status === 200){
                setUser(res.data);
                console.log('form sent');
            }
            else{
                console.log('error occured');
            }
            console.log(res)
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    const handleLogout = async()=>{
        try{
            const res = await axios({
                method:'DELETE',
                url: '/logout'
            })
            setUser(res.data)
            console.log(res)
        }
        catch(e){
            console.log(e.message)
        }
    }
    return(
        <>
        <div className= 'font-sans bg-main-color min-h-screen'>
        <LoggedUser.Provider value={user}>
                <Navbar handleLogout={handleLogout}/>
                <div className="flex flex-col items-center">
                    <Routes>
                        <Route index element={<Home/>}/>
                        {/* to show details components when an anime link is clicked */}
                        <Route path="/details/:id" element={<Details/>}/>
                        <Route path="/login" 
                            element={<Login setUsername={setUsername} 
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/browse" element={<Browse/>}/>
                    </Routes>
                    <Footer/>
                </div>
        </LoggedUser.Provider>
        </div>
        </>
    )
}

export default Layout