// @ts-nocheck
import React from "react";

const CreateAccountModal = ({ setToken }) => {
  return (
    <>
      <form className="form form-signup" id="signup-form">
        <fieldset>
          <legend>
            Please, enter your email, password and password confirmation for
            sign up.
          </legend>
          <div className="input-block">
            <label for="signup-first-name">First Name</label>
            <input
              id="signup-first-name"
              type="username"
              required
              placeholder="First Name"
            />
          </div>
          <div class="input-block">
            <label for="signup-last-name">Last Name</label>
            <input
              id="signup-last-name"
              type="username"
              required
              placeholder="Last Name"
            />
          </div>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input
              id="signup-email"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">Confirm password</label>
            <input
              id="signup-password-confirm"
              type="password"
              required
              placeholder="Confirm Password"
            />
          </div>
        </fieldset>
        <button type="submit" className="btn-signup">
          Continue
        </button>
      </form>
    </>
  );
};

export default CreateAccountModal;
