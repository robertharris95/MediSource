import React from "react";
import ProfilePosts from "./ProfilePosts"
import PersonalInfo from "./PersonalInfo"
function LargeProfilePic() {
    return (
        <>
        <br/>
        <div className="row ">
            <div className="col-2"/>
            <div className="col-6 ml-4">
                <div class="card">
                    <div class="card-body">
                        <h4>Posts</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <ProfilePosts/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="card">
                    <div class="card-body">
                        <h4>Profile Info</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <PersonalInfo/>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <img src="https://via.placeholder.com/350" alt="full profile avi" />
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