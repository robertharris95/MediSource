import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main"

class App extends Component {
        render(){
    
            return(
                <>
                <Router>
                <Container>
                <Wrapper>
                    <Route exact path="/" component={Main} />
                    {/* <Route exact path="/school" component={Login} /> */}
                    {/* <Route exact path="/personal" component={Profile} /> */}
                </Wrapper>
                </Container>
                </Router>
                
                </>
            )
        }
    }
export default App;
