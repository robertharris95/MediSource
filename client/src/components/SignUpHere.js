import React from "react";

const textstyle= {
    color: "#0000ff"
}
function SignUpHere() {
    return (
        <>
        <div class="card w-25 mx-auto shadow">
            <div class="card-body text-center">
                New to Medisource? <a style={textstyle} data-toggle="modal">Sign Up Here!</a>
            </div>
        </div>
<br></br>
<hr></hr>
        {/* Form for now  */}
        <form class="w-75 mx-auto">
            <div className="form-group">
                <input type="Name" className="form-control form-control-lg" id="InputName" aria-describedby="NameHelp" placeholder="Enter Name"/>
 
            </div>
            <div className="form-group">
                <input type="Username" className="form-control form-control-lg" id="InputUsername" aria-describedby="UsernameHelp" placeholder="Enter Username"/>
 
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="InputPassword" placeholder=" Enter Password"/>
            </div>
            <div class="text-center">
            <button type="submit" className="btn btn-primary btn-block mx-auto w-75 ">Register</button>
            </div>
            </form>
        <br/>


        </>)
    }

export default SignUpHere;