// @ts-nocheck
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const CastModal = ({ gameId, awayTeam, homeTeam, toggle, user }) => {
  const [creds, setCreds] = useState("");
  const [notes, setNotes] = useState("");
  const [castingToggle, setCastingToggle] = useState(false);

  const startCast = (body) => {
    axios.post("http://localhost:3001/casts", body);
  };

  const stopCast = (body) => {
    axios.delete("http://localhost:3001/casts", { data: body });
  };

  const castToggle = () => {
    setCastingToggle(!castingToggle);
  };

  const startSubmitHandler = (e) => {
    castToggle();
    let bodyObj = {
      gameId: gameId,
      caster: user,
      creds: creds,
      notes: notes,
    };
    startCast(bodyObj);
  };

  const stopSubmitHandler = (e) => {
    castToggle();

    stopCast({ caster: user });
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="modal-fade"
        id="cast-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="castModalLabel"
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
              <h2 className="team-name">{awayTeam}</h2>
              <h2>@</h2>
              <h2 className="team-name">{homeTeam}</h2>
              <h3>Casting as: {user.username}</h3>
              <form className="login-form">
                <div className="form-inner">
                  <div className="form-group">
                    <label htmlFor="creds">Credentials: </label>
                    <input
                      type="text"
                      name="creds"
                      id="creds"
                      onChange={(e) => setCreds(e.target.value)}
                      placeholder="Why should I listen?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes: </label>
                    <input
                      type="text"
                      name="notes"
                      id="notes"
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="What should I know?"
                    />
                  </div>
                </div>
              </form>
              {!castingToggle && (
                <button className="cast-btn" onClick={startSubmitHandler}>
                  Start Casting
                </button>
              )}
              {castingToggle && (
                <button className="cast-btn" onClick={stopSubmitHandler}>
                  Stop Casting
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default CastModal;
