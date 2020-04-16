import React from "react";

function Post(props) {
    return (
        <>
        <br/>
        <div className="card shadow-lg">
            <div className="card-header">
                <div className="row">
                    <div className="col-1">
                    {/* Profile picture with clickable link */}
                    <img src="https://via.placeholder.com/50" alt="Profile Pic" className="rounded-circle"/>
                    </div>
                    <div className="col-8">
                    {/* Name with clickable link */}
                    <h5 className="card-title username"><span> {props.username} </span> </h5>
                    </div>
                </div>
            </div>
            <div className="row card-body">
                <div className=" col-6">
                <h4 className="card-title"><span> {props.title} </span> </h4>
                <hr/>
                    <p className="card-text">{props.body}</p>
                </div>
            
                <div className="col-5 offset-1 justify-content-center">
                    <img src={props.image} alt={props.alt} className="img-responsive fit-image"/>
                </div>
            </div>
        </div>
        <br/>
        </>
    )
}

export default Post