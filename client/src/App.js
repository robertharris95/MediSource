import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"

class App extends Component {
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
