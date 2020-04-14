import React from "react"
import ProfilePosts from "../components/ProfilePosts"
import LargeProfilePic from "../components/LargeProfilePic"
import Navbar from "../components/Navbar"

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