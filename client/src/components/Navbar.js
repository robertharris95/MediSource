import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/">
        <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="MediSource"/>
      </Link>
      <img src={process.env.PUBLIC_URL + "/images/Medisource.png"}/>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/school"
              className={window.location.pathname === "/school" ? "nav-link active" : "nav-link"}
            >
              Searchbar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/redesign"
              className={window.location.pathname === "/redesign" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>)
}

export default Navbar;