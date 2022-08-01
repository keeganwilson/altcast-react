import React, { useState } from "react";
import CreateAccountModal from "./CreateAccountModal";
import LoginModal from "./LoginModal";

const Download = ({ login, createAccount, error }) => {
  const [isLoginShowing, setIsLoginShowing] = useState(false);
  const [isCreateAccountShowing, setIsCreateAccountShowing] = useState(false);

  const loginToggle = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const createAccountToggle = () => {
    setIsCreateAccountShowing(!isCreateAccountShowing);
  };

  return (
    <section id="cta">
      <h3 className="cta-heading">Start listening and casting today!</h3>
      <button type="button" className="download-button btn btn-lg btn-dark">
        <i className="fa-brands fa-apple"></i> Download
      </button>
      <button type="button" className="download-button btn btn-lg btn-dark">
        <i className="fa-brands fa-google-play"></i> Download
      </button>
      <button
        type="button"
        className="download-button btn btn-lg btn-dark"
        onClick={createAccountToggle}
      >
        Create Account
      </button>
      {isCreateAccountShowing && (
        <CreateAccountModal
          createAccount={createAccount}
          toggle={createAccountToggle}
        />
      )}
      <button
        type="button"
        className="download-button btn btn-lg btn-dark"
        onClick={loginToggle}
      >
        Login
      </button>
      {isLoginShowing && (
        <LoginModal login={login} toggle={loginToggle} error={error} />
      )}
    </section>
  );
};

export default Download;
