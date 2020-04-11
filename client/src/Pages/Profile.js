import React, {Component} from "react"
import ProfilePosts from "../components/ProfilePosts"
import LargeProfilePic from "../components/LargeProfilePic"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Profile(){
    return(
        <>
        <Navbar/>
    
        <LargeProfilePic/>
        <ProfilePosts/>
        </>
    )
    }

export default Profile