import React, { useState } from "react";

const CastCard = ({ cast }) => {
  const [listening, setListening] = useState(false);

  const listenToggle = () => {
    setListening(!listening);
  };

  return (
    <section className="cast-container">
      <section className="caster-container">
        <h5 className="caster">Caster: {cast.caster}</h5>
        <h5 className="creds">Credentials: {cast.creds}</h5>
        <h5 className="notes">Notes: {cast.notes}</h5>
      </section>
      {!listening && (
        <button className="listen-btn btn-lrg-dark" onClick={listenToggle}>
          Listen!
        </button>
      )}
      {listening && (
        <button className="listen-btn btn-lrg-dark" onClick={listenToggle}>
          Stop
        </button>
      )}
    </section>
  );
};

export default CastCard;
