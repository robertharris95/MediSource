import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import axios from "axios"

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         loggedIn: false,
    //         username: null
    //     }
    // }

    // componentDidMount() {
    //     this.getUser()
    // }

    // updateUser(userObject) {
    //     this.setState(userObject)
    // }
    // getUser() {
    //     axios.get('/').then(response => {
    //         console.log('Get user response: ')
    //         console.log(response)
    //         if (response.data.user) {
    //           console.log('Get User: There is a user saved in the server session: ')
      
    //           this.setState({
    //             loggedIn: true,
    //             username: response.data.user.username
    //           })
    //         } else {
    //           console.log('Get user: no user');
    //           this.setState({
    //             loggedIn: false,
    //             username: null
    //           })
    //         }
    //       })
    // }
        render(){
    
            return(
                <>
                <Router>
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                </Router>
                </>
            )
        }
    }
export default App;
