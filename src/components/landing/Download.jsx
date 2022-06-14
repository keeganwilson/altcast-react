import React from "react";

const Download = () => {
  return (
    <section id="cta">
      <h3 className="cta-heading">Start listening and casting today!</h3>
      <button type="button" className="download-button btn btn-lg btn-dark">
        <i className="fa-brands fa-apple"></i> Download
      </button>
      <button type="button" className="download-button btn btn-lg btn-dark">
        <i className="fa-brands fa-google-play"></i> Download
      </button>
      <button type="button" className="download-button btn btn-lg btn-dark">
        Create Account
      </button>
      <button type="button" className="download-button btn btn-lg btn-dark">
        Login
      </button>
    </section>
  );
};

export default Download;
