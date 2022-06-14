import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="row">
        <div className="col-lg-4 feature-box">
          <i className="fa-solid fa-circle-check fa-4x features-icons"></i>
          <h3>Easy to use.</h3>
          <p className="features">
            So easy to use, anyone can cast event audio
          </p>
        </div>

        <div className="col-lg-4 feature-box">
          <i className="fa-solid fa-baseball fa-4x features-icons"></i>
          <h3>Any Sport, Any Team</h3>
          <p className="features">Listen to or cast any live event.</p>
        </div>

        <div className="col-lg-4 feature-box">
          <i className="fa-solid fa-star fa-4x features-icons"></i>
          <h3>Caster Ratings</h3>
          <p className="features">
            Follow your favorite caster or build your own fan base
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
