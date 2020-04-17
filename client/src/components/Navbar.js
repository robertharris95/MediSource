import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu">
      <Link className="navbar-brand" to="/main">
        <img src={process.env.PUBLIC_URL + "/Images/Logo.png"} alt="MediSource Logo"/>
      </Link>
      <Link className="navbar-brand" to="/main">
      <img src={process.env.PUBLIC_URL + "/Images/Medisource.png"} alt="MediSource"/>
      </Link>
      <a 
      className="nav-link" 
      href="/" 
      style={{color:"white"}}
      >
        Log Out 
        </a>
        <ul className="navbar-nav mr-auto">
        </ul>
        
        <div className="nav-item mr-4">
            <form className="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="col-12">
                {/* <input className="form-control mr-sm-2" type="search" placeholder="..."/>
                <button className="btn btn-light btn-outline-primary my-2 my-sm-0  " type="submit">Search User</button> */}
              </div>
            </div>
            </form>

        </div>

          <div className=" justify-content-right">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              <img src="https://via.placeholder.com/350" alt="Profile Pic" className="rounded nav-pic"/>
            </Link>
          </div>
          
    </nav>
    </>)
}

export default Navbar;