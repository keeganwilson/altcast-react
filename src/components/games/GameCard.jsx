// @ts-nocheck
import React, { useState } from "react";
import ListenModal from "./ListenModal";
import CastModal from "./CastModal";

const GameCard = ({ game, user }) => {
  const gameId = game.id;
  const awayTeam = game.away_team;
  const homeTeam = game.home_team;
  const startTimeFull = game.commence_time;
  const startTime = new Date(startTimeFull).toLocaleTimeString();
  const startDate = new Date(startTimeFull).toLocaleDateString();
  const isCompleted = game.completed;

  const [isListenShowing, setIsListenShowing] = useState(false);
  const [isCastShowing, setIsCastShowing] = useState(false);

  const listenToggle = () => {
    setIsListenShowing(!isListenShowing);
  };

  const castToggle = () => {
    setIsCastShowing(!isCastShowing);
  };

  const formatTime = (startTime) => {
    var resultArray = startTime.split(":");
    var result =
      startTime.replace(":" + resultArray[2], " ") +
      resultArray[2].split(" ")[1];
    return result;
  };

  if (!isCompleted) {
    return (
      <section className="gameContainer">
        <div className="team-container">
          <h3 className="team-name">{awayTeam}</h3>
        </div>
        <h3>@</h3>
        <div className="team-container">
          <h3 className="team-name">{homeTeam}</h3>
        </div>

        <h4 className="startTime">{formatTime(startTime)}</h4>
        <h4 className="gameDate">{startDate}</h4>
        <button className="listen-btn btn-lg-dark" onClick={listenToggle}>
          View Casts
        </button>
        {isListenShowing && (
          <ListenModal
            gameId={gameId}
            awayTeam={awayTeam}
            homeTeam={homeTeam}
            toggle={listenToggle}
          />
        )}

        <button className="cast-btn btn-lg-dark" onClick={castToggle}>
          Cast
        </button>
        {isCastShowing && (
          <CastModal
            gameId={gameId}
            awayTeam={awayTeam}
            homeTeam={homeTeam}
            toggle={castToggle}
            user={user}
          />
        )}
      </section>
    );
  }
};

export default GameCard;
