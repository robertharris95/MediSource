import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar"
import NewPostModal from "../components/NewPostModal";
import HelpModal from "../components/HelpModal";
import API from "../utils/API";
import ComingSoon from "../components/ComingSoon";
import axios from "axios";

function Main(){
    const [dbArray, getArray] = useState([]);
    const [log, setLog] = useState({
        loggedIn: false,
        username: null
    });

    useEffect(()=> {
        getAll()
        getUser()
    }, [])

    function getUser() {
        axios.get('/api/data/session').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
              console.log('Get User: There is a user saved in the server session: ')
      
            //   setLog({
            
            //   })
            } else {
              console.log('Get user: no user');
            //   this.setState({
            //     loggedIn: false,
            //     username: null
            //   })
            }
          })
    }
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
        {
            dbArray.reverse().map(element => {
            return(
                <Post image= {element.image} alt= {element.alt} title= {element.title} body= {element.body} username={element.user} userpic={element.userpic}/>
            )})
        }
        </div>
        </div>
        <NewPostModal/>
        <HelpModal/>
        <ComingSoon/>
     </>
    )
}

export default Main;