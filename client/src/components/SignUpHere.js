import React from "react";

const textstyle= {
    color: "#0000ff"
}
function SignUpHere() {
    return (
        <>
        <div className="card w-25 mx-auto shadow">
            <div className="card-body text-center">
                New to Medisource? <button style={textstyle} data-toggle="modal" data-target="#signupModal">Sign Up Here!</button>
            </div>
        </div>
        </>)
    }

export default SignUpHere;