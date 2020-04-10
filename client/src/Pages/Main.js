import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import Post from "../components/Post"
function Main(){
    return(
    <>
        <Navbar/>
        // Map over all of these
        <Post/>
     </>
    )
}

export default Main;