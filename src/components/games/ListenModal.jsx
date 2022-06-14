import React from "react";
import ReactDOM from "react-dom";
import GameCasts from "./GameCasts";

const ListenModal = ({ awayTeam, homeTeam, isShowing, hide }) =>
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
              <p>Testing</p>
              <GameCasts />
            </div>
          </div>
        </React.Fragment>,
        document.getElementById("portal")
      )
    : null;

export default ListenModal;
