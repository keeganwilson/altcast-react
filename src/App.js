// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import GetGames from "./components/games/GetGames";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const createAccount = (body) => {
    axios
      .post("http://localhost:3001/users", body)
      .then(alert("Your account has been added"))
      .catch((err) => console.log(err));
  };

  const login = (details) => {
    if (details.username === "guest" && details.password === "password") {
      setToken(true);
      setUser(details.username);
    } else setError("Invalid username or password");
    // axios
    //   .get(`http://localhost:3001/users`, { params: details })
    //   .then((res) => {
    //     setToken(true);
    //     setUser(details.username);
    //   })
    //     .catch((err) => setError("Invalid username or password"));
  };

  const logout = () => {
    setToken(false);
  };

  return (
    <div className="App">
      {token ? (
        <GetGames logout={logout} user={user} />
      ) : (
        <Landing login={login} createAccount={createAccount} error={error} />
      )}
    </div>
  );
};

export default App;
