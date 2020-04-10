import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/main">
        <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="MediSource"/>
      </Link>
      <Link className="navbar-brand" to="/main">
      <img src={process.env.PUBLIC_URL + "/images/Medisource.png"}/>
      </Link>
        <ul className="navbar-nav mr-auto">
        </ul>
        
        <div className="nav-item mr-4">
            <form class="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="col-12">
                <input class="form-control mr-sm-2" type="search" placeholder="..."/>
                <button class="btn btn-light btn-outline-primary my-2 my-sm-0  " type="submit">Search</button>
              </div>
            </div>
            </form>

        </div>

          <div className=" justify-content-right">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              <img src="https://via.placeholder.com/75" alt="Profile Pic"/>
            </Link>
          </div>
          
    </nav>
    </>)
}

export default Navbar;