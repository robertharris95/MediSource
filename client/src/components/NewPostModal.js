import React, {useState, useEffect} from "react";
import API from "../utils/API";
import axios from "axios";

function NewPostModal() {
    const [PostObj, setPost] = useState({
        title:"",
        body:"",
        image:"",
        user:""
    });
    const [session, setSession] = useState({
        id: ""
    });

    useEffect(() => {
        // getSession()
    })

    function getSession(){
        API.session()
          .then(res => console.log(res.data));
    }

    function loading(){
        API.getDB()
          .then(res => setPost(res.data))
          .catch(err => console.log(err))
    }
    function handleImage(e){
        const files= e.target.files[0];
        let formData = new FormData();
            formData.append("upload_preset", "medisource")
            formData.append("file", files)
            console.log(formData);
            axios.post("https://api.cloudinary.com/v1_1/andreslong/image/upload", formData)
              .then(res => setPost({...PostObj, image: res.data.url}))
        // setPost({...PostObj, image: formData});
    }

    function handleInput(e){
        const {name, value} = e.target;
        setPost({...PostObj, [name]: value})
    };

    function handleClick(e){
        // e.preventDefault();
        if (PostObj.title && PostObj.body) {
            API.postUser(PostObj)
              .then(res => loading())
              .catch(err => console.log(err));
            console.log(PostObj);
            window.location.reload(false)
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
                    <input type="file" className="form-control-file" id="PostPicFile" onChange= {handleImage}/>
                    <br/>
                    <button type="submit" className="btn btn-primary mb-2" onClick={handleClick} data-dismiss="modal">Post</button>
                </form>
                    <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default NewPostModal;