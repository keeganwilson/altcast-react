import React from "react";
import mockup from "../../media/pics/altcast-mockup.png";

const Title = () => {
  return (
    <section id="title">
      <div className="row">
        <div className="col-lg-6">
          <h1>Listen to event livecasts or stream your own livecast.</h1>
          <button type="button" className="btn btn-dark btn-lg download-button">
            <i className="fa-brands fa-apple"></i> Download
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-lg download-button"
          >
            <i className="fa-brands fa-google-play"></i> Download
          </button>
        </div>
        <div className="col-lg-6">
          <img className="title-image" src={mockup} alt="AltCast Mockup" />
        </div>
      </div>
    </section>
  );
};

export default Title;
