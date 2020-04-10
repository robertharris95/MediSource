import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/">
      <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="MediSource"/>
      </Link>
      <img src={process.env.PUBLIC_URL + "/images/Medisource.png"}/>
    </nav>
    </>)
}

export default LoginHeader;