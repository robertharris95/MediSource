import React from "react";

function ComingSoon() {
    return (
        <>
        <div className="modal fade" id="ComingSoon" tabIndex="-1" role="dialog" aria-labelledby="ComingSoon" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="ComingSoon">This Feature is Coming Soon</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>
        </div>
        </div>
        </>
    )};

export default ComingSoon;