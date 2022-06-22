// @ts-nocheck
import React, { useState } from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ toggle, login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="modal-fade"
        id="login-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
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
              <form className="login-form" onSubmit={submitHandler}>
                <div className="form-inner">
                  <h2>Login</h2>

                  {error !== "" ? <div className="error">{error}</div> : ""}
                  <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={(e) =>
                        setDetails({ ...details, username: e.target.value })
                      }
                      value={details.username}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>
                  <input type="submit" className="btn-login" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default LoginModal;
