import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const startCast = (body) => {
  axios.post("/casts", body);
};

const CastModal = ({ gameId, awayTeam, homeTeam, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>{awayTeam}</p>
              <p>{homeTeam}</p>
              <button className="castBtn btn-lrg-dark" onClick={startCast}>
                Start Cast
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default CastModal;
