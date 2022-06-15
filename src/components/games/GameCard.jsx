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

  const formatTime = (time) => {
    var resultArray = time.split(":");
    var result =
      time.replace(":" + resultArray[2], " ") + resultArray[2].split(" ")[1];
    return result;
  };

  return (
    <section className="gameContainer">
      <div className="team-container">
        <img src="" alt="Away Team Logo" />
        <h3 className="team-name">{awayTeam}</h3>
      </div>
      <h3>@</h3>
      <div className="team-container">
        <img src="" alt="Home Team Logo" />
        <h3 className="team-name">{homeTeam}</h3>
      </div>
      <h4 className="startTime">{formatTime(time)}</h4>
      <h4 className="gameDate">{date}</h4>
      <button className="btn btn-lg-dark" onClick={toggle}>
        View Casts
      </button>
      <ListenModal
        gameId={gameId}
        awayTeam={awayTeam}
        homeTeam={homeTeam}
        isShowing={isShowing}
        toggle={toggle}
      />
      <button className="btn btn-lg-dark" onClick={toggle}>
        Cast
      </button>
      <CastModal
        gameId={gameId}
        awayTeam={awayTeam}
        homeTeam={homeTeam}
        isShowing={isShowing}
        toggle={toggle}
      />
    </section>
  );
};

export default GameCard;
