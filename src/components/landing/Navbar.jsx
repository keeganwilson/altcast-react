// @ts-nocheck
import React, { useState } from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logo from "../../media/pics/logo.png";
import LoginModal from "./LoginModal";
import CreateAccountModal from "./CreateAccountModal";

const Navbar = ({ login, createAccount, error }) => {
  const [isLoginShowing, setIsLoginShowing] = useState(false);
  const [isCreateAccountShowing, setIsCreateAccountShowing] = useState(false);

  const loginToggle = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const createAccountToggle = () => {
    setIsCreateAccountShowing(!isCreateAccountShowing);
  };

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
                <a className="nav-link" href="#cta">
                  Download
                </a>
              </li>
              <button className="create-acct-btn" onClick={createAccountToggle}>
                Create Account
              </button>
              {isCreateAccountShowing && (
                <CreateAccountModal
                  createAccount={createAccount}
                  toggle={createAccountToggle}
                />
              )}
              <button className="login-btn" onClick={loginToggle}>
                Login
              </button>
              {isLoginShowing && (
                <LoginModal login={login} toggle={loginToggle} error={error} />
              )}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
