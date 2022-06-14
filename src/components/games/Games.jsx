// @ts-nocheck
import React from "react";
import GameCard from "./GameCard";

const Games = ({ league, games, id }) => {
  return (
    <>
      <h2 id={league}>{league}</h2>
      <section className="gamesContainer">
        {games.map((game) => {
          return <GameCard key={id} game={game} />;
        })}
      </section>
    </>
  );
};

export default Games;
