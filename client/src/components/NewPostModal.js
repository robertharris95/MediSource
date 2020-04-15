import React, {useState} from "react";
import API from "../utils/API";

function NewPostModal() {
    const [PostObj, setPost] = useState({
        title:"",
        body:"",
        image:"",
        user:""
    });

    function handleInput(e){
        const {name, value} = e.target;
        setPost({...PostObj, [name]: value})
    };

    function handleClick(e){
        e.preventDefault();
        console.log("click")
        if (PostObj.title && PostObj.body) {
            API.PostUser(PostObj)
              .catch(err => console.log(err));
            console.log(PostObj);
        }
    }


    return (
        <>
        <div className="modal fade" id="NewPostModal" tabIndex="-1" role="dialog" aria-labelledby="NewPostModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="NewPostModalLabel">What are you thinking?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="w-75 mx-auto">
                <input type="Title" name="title" onChange= {handleInput} className="form-control form-control-lg" id="InputTitle" aria-describedby="TitleHelp" placeholder="Enter a Title"/>
                <br/>
                    <textarea className="form-control" id="PostTextarea1" rows="5" type="Body" name="body" onChange={handleInput} placeholder="Say Something..."></textarea>
                    <label htmlFor="PostFile1">Add picture files here:</label>
                    <input type="file" className="form-control-file" id="PostPicFile" onChange= {handleInput}/>
                    <br/>
                    <button type="submit" className="btn btn-primary mb-2" onClick={handleClick}>Post</button>
                </form>
                    <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default NewPostModal;