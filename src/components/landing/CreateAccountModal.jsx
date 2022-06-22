// @ts-nocheck
import React, { useState } from "react";
import ReactDOM from "react-dom";

const CreateAccountModal = ({ toggle, createAccount }) => {
  const [body, setBody] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await createAccount(body);
    toggle();
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="modal-fade"
        id="create-account-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggle}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                className="form form-signup"
                id="signup-form"
                onSubmit={submitHandler}
              >
                <h3>Create Account</h3>
                <fieldset>
                  <div className="input-block">
                    <label htmlFor="signup-first-name">First Name:</label>
                    <input
                      id="signup-first-name"
                      type="text"
                      required
                      placeholder="First Name"
                      onChange={(e) =>
                        setBody({ ...body, firstName: e.target.value })
                      }
                      value={body.firstName}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-last-name">Last Name:</label>
                    <input
                      id="signup-last-name"
                      type="username"
                      required
                      placeholder="Last Name"
                      onChange={(e) =>
                        setBody({ ...body, lastName: e.target.value })
                      }
                      value={body.lastName}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-username">Username:</label>
                    <input
                      id="signup-username"
                      type="username"
                      required
                      placeholder="Username"
                      onChange={(e) =>
                        setBody({ ...body, username: e.target.value })
                      }
                      value={body.username}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail:</label>
                    <input
                      id="signup-email"
                      type="email"
                      required
                      placeholder="Email"
                      onChange={(e) =>
                        setBody({ ...body, email: e.target.value })
                      }
                      value={body.email}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password:</label>
                    <input
                      id="signup-password"
                      type="password"
                      required
                      placeholder="Password"
                      onChange={(e) =>
                        setBody({ ...body, password: e.target.value })
                      }
                      value={body.password}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password-confirm">
                      Confirm password:
                    </label>
                    <input
                      id="signup-password-confirm"
                      type="password"
                      required
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        setBody({ ...body, confirmPassword: e.target.value })
                      }
                      value={body.confirmPassword}
                    />
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="btn-signup"
                  value="CreateAccount"
                >
                  Sign Up!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default CreateAccountModal;
