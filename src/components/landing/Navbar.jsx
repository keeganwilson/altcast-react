// @ts-nocheck
import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logo from "../../media/pics/logo.png";
import LoginModal from "./LoginModal";
import CreateAccountModal from "./CreateAccountModal";
import useModal from "../../hooks/useModal";

const Navbar = ({ Login, error }) => {
  const { isShowing, toggle } = useModal();

  return (
    <section className="navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">
            <img className="navbar-logo" src={logo} alt="Altcast Logo" />
          </a>

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
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">
                  Download
                </a>
              </li>
              {/* <BrowserRouter>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/create-account">Create Account</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <Routes>
                    <Route
                      className="nav-link"
                      path="/create-account"
                      element={<CreateAccountModal />}
                    >
                      Create Account
                    </Route>
                    <Route
                      className="nav-link"
                      path="/login"
                      element={<LoginModal Login={Login} error={error} />}
                    >
                      Login
                    </Route>
                  </Routes>
                  
                </ul>
              </BrowserRouter> */}
              <button onClick={toggle}>Login</button>
              <LoginModal isShowing={isShowing} toggle={toggle} />
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
