// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import CastCard from "./CastCard";

const GameCasts = () => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios.get("/casts/:id").then((res) => setCasts(res.data.results));
  }, []);

  return (
    <section className="castsContainer">
      <section>
        {casts.map((cast) => {
          return <CastCard cast={cast} />;
        })}
      </section>
    </section>
  );
};

export default GameCasts;
