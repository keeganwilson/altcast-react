// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import CastCard from "./CastCard";

const GameCasts = ({ gameId, user }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/casts`, { params: { gameId } })
      .then((res) => setCasts(res.data));
  }, [gameId]);

  return (
    <section className="castsContainer">
      {casts.map((cast) => {
        return <CastCard key={cast.cast_id} cast={cast} user={user} />;
      })}
    </section>
  );
};

export default GameCasts;
