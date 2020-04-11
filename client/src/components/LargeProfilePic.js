import React from "react";

function LargeProfilePic() {
    return (
        <>
        <br/>
        <div className="row ">
            <div className="col-2"/>
            <div className="col-6 ml-4">
                <div class="card">
                    <div class="card-body">
                        Posts
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="card">
                    <div class="card-body">
                        Profile Info
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <img src="https://via.placeholder.com/350" alt="profile picture" />
                <br/>
                <br/>
                <div className="card" style={{width: 350}}>
                <div class="card-body">
                        Name 
                        <a>@Username</a>
                    </div>

                </div>
            </div>
        </div>
        </>)
    }

export default LargeProfilePic;