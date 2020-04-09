import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/">
        Logo
      </Link>
    </nav>
    </>)
}

export default LoginHeader;