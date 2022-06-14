// @ts-nocheck
import React from "react";
import useModal from "../../hooks/useModal";
import ListenModal from "./ListenModal";
import CastModal from "./CastModal";

const GameCard = ({ game }) => {
  const gameId = game.id;
  const awayTeam = game.away_team;
  const homeTeam = game.home_team;
  const startTime = game.commence_time;
  const time = new Date(startTime).toLocaleTimeString();
  const date = new Date(startTime).toLocaleDateString();
  const { isShowing, toggle } = useModal();

  console.log(time);

  return (
    <section className="gameContainer">
      <h3 className="teams">{awayTeam}</h3>
      <h3>@</h3>
      <h3 className="teams">{homeTeam}</h3>
      <h4 className="startTime">{time}</h4>
      <h4 className="gameDate">{date}</h4>
      <button className="btn btn-lg-dark" onClick={toggle}>
        View Casts
      </button>
      <ListenModal
        gameId={gameId}
        awayTeam={awayTeam}
        homeTeam={homeTeam}
        isShowing={isShowing}
        hide={toggle}
      />
      <button className="btn btn-lg-dark" onClick={toggle}>
        Cast
      </button>
      <CastModal
        gameId={gameId}
        awayTeam={awayTeam}
        homeTeam={homeTeam}
        isShowing={isShowing}
        hide={toggle}
      />
    </section>
  );
};

export default GameCard;
