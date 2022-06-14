// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import GetGames from "./components/games/GetGames";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(false);
  const [attempt, setAttempt] = useState({});
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    axios
      .get(`http://localhost:3000/users/?username=${details.username}`)
      .then(setAttempt({ data: user }))
      .catch((err) => console.log(err));

    if (
      details.username === attempt.username &&
      details.password === attempt.passsord
    ) {
      setToken(true);
      setUser({
        name: user.name,
        email: user.email,
      });
    } else setError("Invalid username or password");
  };

  const Logout = () => {
    setToken(false);
  };

  return (
    <div className="App">
      {token ? (
        <GetGames Logout={Logout} />
      ) : (
        <Landing Login={Login} error={error} />
      )}
    </div>
  );
};

export default App;
