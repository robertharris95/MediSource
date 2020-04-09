import React, { Component } from "react"
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import SignUpHere from "../components/SignUpHere";
import SignUpModal from "../components/SignUpModal";

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
        <SignUpModal/>
        </>
    )
}

export default Login;