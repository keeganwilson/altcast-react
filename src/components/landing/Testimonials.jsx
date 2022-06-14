import React from "react";
import amanda from "../../media/pics/amanda.png";
import bro from "../../media/pics/bro.png";
import dave from "../../media/pics/greenbay-fan.png";

const Testimonials = () => {
  return (
    <section className="colored-section" id="testimonials">
      <div
        id="testimonial-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="testimonial-text">
              I never have to listen to Joe Buck dump on my team again!
            </h2>
            <img className="testimonial-image" src={dave} alt="user" />
            <em>Dave - Green Bay, Wisconsin</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              My girlfriend loves soccer and I have no idea what's going on.
              Thanks to Jeff casting MLS games and explaining the rules and
              strategy I can now enjoy watching matches with my girlfriend.
            </h2>
            <img className="testimonial-image" src={bro} alt="user" />
            <em>Brock - Tampa Bay, Florida</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              While living on the west coast and being from Boston, listening to
              Red Sox games by Murphy with his heavy accent really helped with
              being homesick.
            </h2>
            <img className="testimonial-image" src={amanda} alt="user" />
            <em>Amanda - Pasadena, California</em>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
