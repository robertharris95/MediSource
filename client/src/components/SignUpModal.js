import React from "react";

function SignUpModal() {
    return (
        <>
        <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">Enter your information below</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="w-75 mx-auto">
                <div className="form-group">
                    <input type="Name" className="form-control form-control-lg" id="InputName" aria-describedby="NameHelp" placeholder="Enter Name"/>
    
                </div>
                <div className="form-group">
                    <input type="Username" className="form-control form-control-lg" id="InputUsername" aria-describedby="UsernameHelp" placeholder="Enter Username"/>
    
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="InputPassword" placeholder=" Enter Password"/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block mx-auto w-75 ">Register</button>
                </div>
                </form>
                    <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default SignUpModal;

