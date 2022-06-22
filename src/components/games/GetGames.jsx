// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarUser from "./NavBarUser";
import Footer from "../Footer";
import Games from "./Games";

const URL = "https://api.the-odds-api.com/v4/sports/";

const API_KEY = "28ba31c6917f45f3cf6bb942e5c97fe5";

const endpoints = {
  mlb: "baseball_mlb/scores",
  nfl: "americanfootball_nfl/scores",
  nba: "basketball_nba/scores",
  nhl: "icehockey_nhl/scores",
};

const GetGames = ({ logout, user }) => {
  const [mlb, setMlb] = useState([]);
  const [nfl, setNfl] = useState([]);
  const [nba, setNba] = useState([]);
  const [nhl, setNhl] = useState([]);

  useEffect(() => {
    // Get the MLB Games
    axios
      .get(`${URL}${endpoints.mlb}/?apiKey=${API_KEY}`)
      .then((res) => {
        setMlb(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    //   Get the NFL Games
    axios
      .get(`${URL}${endpoints.nfl}/?apiKey=${API_KEY}`, {
        params: {
          API_KEY,
        },
      })
      .then((res) => {
        setNfl(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    //   Get the NBA Games
    axios
      .get(`${URL}${endpoints.nba}/?apiKey=${API_KEY}`, {
        params: {
          API_KEY,
        },
      })
      .then((res) => {
        setNba(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    //   Get the NHL Games
    axios
      .get(`${URL}${endpoints.nhl}/?apiKey=${API_KEY}`, {
        params: {
          API_KEY,
        },
      })
      .then((res) => {
        setNhl(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <NavbarUser logout={logout} user={user} />
      <section className="games">
        <Games league="MLB" games={mlb} user={user} />
        <Games league="NFL" games={nfl} user={user} />
        <Games league="NBA" games={nba} user={user} />
        <Games league="NHL" games={nhl} user={user} />
      </section>
      <Footer />
    </>
  );
};

export default GetGames;
