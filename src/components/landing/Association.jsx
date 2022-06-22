import React from "react";
import mlb from "../../media/pics/mlb/mlb-logo.png";
import nfl from "../../media/pics/nfl/nfl-logo.png";
import nba from "../../media/pics/nba/nba-logo.png";
import nhl from "../../media/pics/nhl/nhl-logo.png";

const Association = () => {
  return (
    <section id="association">
      <img className="league-logo" src={mlb} alt="MLB-logo" />
      <img className="league-logo" src={nfl} alt="NFL-logo" />
      <img className="nba-league-logo" src={nba} alt="NBA-logo" />
      <img className="league-logo" src={nhl} alt="NHL-logo" />
    </section>
  );
};

export default Association;
