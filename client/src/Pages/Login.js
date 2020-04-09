import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginHeader from "../components/LoginHeader"
import LoginForm from "../components/LoginForm"
import SignUpHere from "../components/SignUpHere";

function Login(){
    return(
        <>
        <LoginHeader/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <LoginForm/>
        <br/>
        <br/>
        <br/>
        <br/>
        <SignUpHere/>
        </>
    )
}

export default Login;