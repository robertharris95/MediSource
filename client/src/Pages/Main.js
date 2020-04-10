import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar"
import NewPostModal from "../components/NewPostModal";
function Main(){
    return(
    <>
        <Navbar/>
        // Map over all of these
        <Post/>
        <Sidebar/>
        <NewPostModal/>
     </>
    )
}

export default Main;