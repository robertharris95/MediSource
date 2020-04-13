import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar"
import NewPostModal from "../components/NewPostModal";
import HelpModal from "../components/HelpModal";
function Main(){
    return(
    <>
        <Navbar/>
        <div className="row">
        
        <Sidebar/>
        <div className="col-8">
        <br/>
        {/* // Map over all of these */}
        <Post/><Post/><Post/>
        
        </div>
        </div>
        <NewPostModal/>
        <HelpModal/>
     </>
    )
}

export default Main;