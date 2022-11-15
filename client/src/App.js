import React from "react";

import Layout from "./components/Layout/Layout";
import './App.css'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>

    </>
  );
}

export default App;
