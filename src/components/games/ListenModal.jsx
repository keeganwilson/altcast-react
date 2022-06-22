// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import GetCasts from "./GetCasts";

const ListenModal = ({ awayTeam, homeTeam, gameId, toggle }) =>
  ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="modal-fade"
        id="listen-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="listenModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggle}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <section className="teams-container">
                <h2 className="team-name">{awayTeam}</h2>
                <h2>@</h2>
                <h2 className="team-name">{homeTeam}</h2>
              </section>
              <GetCasts gameId={gameId} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );

export default ListenModal;
