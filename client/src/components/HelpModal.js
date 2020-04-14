import React from "react";

function HelpModal() {
    return (
        <>
        <div className="modal fade" id="HelpModal" tabIndex="-1" role="dialog" aria-labelledby="HelpModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="HelpModalLabel">What issue are you having?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="w-75 mx-auto">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    <label htmlFor="exampleFormControlFile1">If applicable, attach a screenshot of your error message:</label>
                    <input type="file" className="form-control-file" id="PostPicFile"/>
                    <br/>
                    <button type="submit" className="btn btn-primary mb-2">Post</button>
                </form>
                    <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default HelpModal;