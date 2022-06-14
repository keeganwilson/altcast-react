import React from "react";

const CastCard = ({ cast }) => {
  return (
    <section className="castContainer">
      <p>{cast.user}</p>
      <p>{cast.creds}</p>
      <p>{cast.notes}</p>
      <button className="listenBtn btn-lrg-dark">Listen!</button>
    </section>
  );
};

export default CastCard;
