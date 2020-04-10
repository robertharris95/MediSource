import React, { useState } from "react";
import API from "../utils/API";


function LoginForm() {
    const [field, setField] = useState({
        email: "",
        password: ""
    });
    function handleChange (e) {
        const {name, value} = e.target;
        setField({...field, [name]: value});
        console.log(field)
    }

    const loginAttempt = (e) => {
        // let ems = document.getElementById("email");
        // let pass = document.getElementById("password");
        e.preventDefault();
        console.log(field)
        // API.loginAttempt(field)
        // setField({ email: "", password: ""})
        // ems.innerHTML("");
        // pass.innerHTML("");
    }

    return (
        <>

        <div className="card w-50 border-primary mx-auto shadow-lg">
        <br/>
        <br/>
            <form className="w-75 mx-auto">
            <div className="form-group">
                <input type="email" id="email" name="email" onChange={handleChange} className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" onChange={handleChange} id="pass" className="form-control form-control-lg" placeholder="Password"/>
            </div>
            <div className="text-center">
            <button type="submit" onClick = {loginAttempt} className="btn btn-primary btn-block mx-auto w-75 ">Log In</button>
            </div>
            </form>
        <br/>
        <br/>
         </div>

        </>)
    }

export default LoginForm;