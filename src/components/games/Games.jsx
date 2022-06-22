/* eslint-disable array-callback-return */
// @ts-nocheck
import React from "react";
import GameCard from "./GameCard";

const Games = ({ league, games, user }) => {
  return (
    <>
      <h2 id={league}>{league}</h2>
      <section className="gamesContainer">
        {games
          .filter((game) => {
            const startTimeFull = game.commence_time;
            const startDate = new Date(startTimeFull).toLocaleDateString();
            const todaysDate = new Date();
            const day = todaysDate.getDate();
            const month = todaysDate.getMonth() + 1;
            const year = todaysDate.getFullYear();

            if (startDate === `${month}/${day}/${year}`) {
              return game;
            }
          })
          .map((game) => {
            return <GameCard key={game.id} game={game} user={user} />;
          })}
      </section>
    </>
  );
};

export default Games;
