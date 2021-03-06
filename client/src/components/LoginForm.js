import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
// import { response } from "express";


function LoginForm() {
    const [field, setField] = useState({
        username: "",
        password: "",
        redirectTo: null
    });
    // const [log, setLog] = useState({
    //     loggedUser: ""
    // })
    function handleChange (e) {
        const {name, value} = e.target;
        setField({...field, [name]: value});
        // console.log(field)
    }

    const loginAttempt = (e) => {
        // let ems = document.getElementById("email");
        // let pass = document.getElementById("password");
        e.preventDefault();
        console.log(field)
        setField({...field, redirectTo: null})

        API.loginAttempt(field)
          .then(res => {
              console.log('login response: ')
              console.log(res)
            if (res.status === 200) {
                // setLog({...log, loggedUser: field.username})
                setField({
                    redirectTo: true
                })
                // console.log(log)
            }
        }).catch(err => console.log(err))
        
        setField({...field, password: ""})
    }

    return (
        <>

        {field.redirectTo ? <Redirect to= "/main" /> :null}
        <div className="card w-50 border-primary mx-auto shadow-lg">
        <br/>
        <br/>
            <form className="w-75 mx-auto">
            <div className="form-group">
                <input type="email" id="email" name="username" onChange={handleChange} className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter email" value={field.email}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <input type="password" name="password" onChange={handleChange} id="pass" className="form-control form-control-lg" placeholder="Password" value={field.password}/>
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