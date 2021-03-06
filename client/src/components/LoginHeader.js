import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/">
      <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="MediSource Logo"/>
      </Link>
      <img src={process.env.PUBLIC_URL + "/Images/Medisource.png"} alt="MediSource"/>
    </nav>
    </>)
}

export default LoginHeader;