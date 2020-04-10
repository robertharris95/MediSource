import React from "react";

function Sidebar() {
    return (
        <>
          <div className="d-flex" id="wrapper">
                <div className="bg-light border-right nav-fill" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light" data-toggle="modal" data-target="#NewPostModal">New Post</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Favorites</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Help</a>
                </div>
                </div>
            </div>
        </>)
}

export default Sidebar;