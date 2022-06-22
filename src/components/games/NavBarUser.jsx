import React from "react";

const NavbarUser = ({ logout, user }) => {
  return (
    <section className="">
      <div className="user-container-fluid">
        <nav className="justify-content-between navbar navbar-expand-lg navbar-dark">
          <h4 className="hello-user">Hello, {user}</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="justify-content-end collapse navbar-collapse"
            id="navbarToggler"
          >
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
              <li>
                <h3 className="spacer">|</h3>
              </li>
              <button className="logout-btn" onClick={logout}>
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
