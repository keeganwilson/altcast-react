// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import GetGames from "./components/games/GetGames";

const App = () => {
  const [token, setToken] = useState();

  if (token) {
    return <Landing setToken={setToken} />;
  } else
    return (
      <>
        <GetGames />
      </>
    );
};

export default App;
