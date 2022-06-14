import React from "react";

const Pricing = () => {
  return (
    <section className="white-section" id="pricing">
      <h2 className="section-heading">Plans for Casting and Listening</h2>
      <p>
        Simple and affordable price plans access livecasts and livecast your own
        event audio.
      </p>

      <div className="row">
        <div className="pricing-column col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>One Team</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$5 / mo</h2>
              <p>Live audio for any one team</p>
              <p>Follow your favorite casters</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>One League</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$10 / mo</h2>
              <p>Live audio for any one league</p>
              <p>Follow your favorite casters</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-lg-3">
          <div className="card">
            <div className="card-header">
              <h3>All Games</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$15 / mo</h2>
              <p>Live audio for all games</p>
              <p>Follow your favorite casters</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-lg-3">
          <div className="card">
            <div className="card-header">
              <h3>Livecast</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$25 / mo</h2>
              <p>Livecast audio for any event</p>
              <p>Build a fan base</p>
              <p>Unlimited livecasts</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
