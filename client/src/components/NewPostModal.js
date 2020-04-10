import React from "react";

function NewPostModal() {
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    <label for="exampleFormControlFile1">Add picture files here:</label>
                    <input type="file" class="form-control-file" id="PostPicFile"/>
                    <br/>
                    <button type="submit" class="btn btn-primary mb-2">Post</button>
                </form>
                    <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default NewPostModal;