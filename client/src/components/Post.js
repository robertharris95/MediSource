import React from "react";

function Post(props) {
    return (
        <>
        <br/>
        <div className="card">
            {/* picture with clickable link */}
            <img src={props.image} alt={props.user}/>
            {/* Name with clickable link */}
            <h5><span> {props.user} </span> </h5>
            <p>{props.body}</p>
        </div>
        <br/>
        </>
    )
}

export default Post