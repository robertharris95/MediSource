import React, {useState} from "react";
import API from "../utils/API";

function SignUpModal() {

    const [registerObj, setRegister] = useState({
        name:"",
        username:"",
        password:""
    });

    function handleInput(e){
        const {name, value} = e.target;
        setRegister({...registerObj, [name]: value})
    };

    function handleClick(e){
        e.preventDefault();
        if (registerObj.name && registerObj.username && registerObj.password) {
            API.registerUser(registerObj)
              .catch(err => console.log(err));
            console.log(registerObj);
        }
        setRegister({name: "",username: "",password: ""})
    }

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
                    <input type="Name" name="name" onChange= {handleInput} className="form-control form-control-lg" id="InputName" aria-describedby="NameHelp" placeholder="Enter Name" value={registerObj.name} />
    
                </div>
                <div className="form-group">
                    <input type="Username" name="username" onChange= {handleInput} className="form-control form-control-lg" id="InputUsername" aria-describedby="UsernameHelp" placeholder="Enter Email" value={registerObj.username}/>
    
                </div>
                <div className="form-group">
                    <input type="password" name="password" onChange={handleInput} className="form-control form-control-lg" id="InputPassword" placeholder=" Enter Password" value={registerObj.password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="PostFile1"><h5>Add a profile picture:</h5></label>
                    <input type="file" className="form-control-file" id="PostPicFile" onChange= {handleInput}/>
                </div>
                <div className="text-center">
                    <button type="submit" onClick={handleClick} className="btn btn-primary btn-block mx-auto w-75 " data-dismiss="modal">Register</button>
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

