import React from "react";

const NavbarUser = ({ Logout }) => {
  return (
    <section className="navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#MLB">
                  MLB
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#NFL">
                  NFL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#NBA">
                  NBA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#NHL">
                  NHL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#MLS">
                  MLS
                </a>
              </li>
              <li>
                <h3 className="spacer">|</h3>
              </li>
              <button className="logout-btn" onClick={Logout}>
                Logout
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavbarUser;
