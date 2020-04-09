import React from "react";

function LoginForm() {
    return (
        <>

        <div class="card w-50 border-primary mx-auto shadow-lg">
        <br/>
        <br/>
            <form class="w-75 mx-auto">
            <div className="form-group">
                <input type="email" className="form-control form-control-lg" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="InputPassword" placeholder="Password"/>
            </div>
            <div class="text-center">
            <button type="submit" className="btn btn-primary btn-block mx-auto w-75 ">Log In</button>
            </div>
            </form>
        <br/>
        <br/>
         </div>

        </>)
    }

export default LoginForm;