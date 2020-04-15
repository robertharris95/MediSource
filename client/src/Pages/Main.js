import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar"
import NewPostModal from "../components/NewPostModal";
import HelpModal from "../components/HelpModal";
import API from "../utils/API";

function Main(){
    const [dbArray, getArray] = useState([]);

    useEffect(()=> {
        getAll()
        // console.log(API);
    }, [])

    function getAll() {
        API.getDB()
          .then(res => getArray(res.data))
          .catch(err => console.log(err))
    }
    return(
    <>
        <Navbar/>
        <div className="row">
        
        <Sidebar/>
        <div className="col-8">
        <br/>
        {dbArray.image ? (
            dbArray.map(element => {
            return(
                <Post image= {element.image} alt= {element.alt} title= {element.title} body= {element.body}/>
            )}
        )) : (
            dbArray.map(element => {
            return(
                <Post title= {element.title} body= {element.body}/>
            )}
        ))
        }
        </div>
        </div>
        <NewPostModal/>
        <HelpModal/>
     </>
    )
}

export default Main;