import React from "react";
import mlb from "../../media/pics/mlb-logo.png";
import nfl from "../../media/pics/nfl-logo.png";
import nba from "../../media/pics/nba-logo.png";
import nhl from "../../media/pics/nhl-logo.png";
import mls from "../../media/pics/mls-logo.png";

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
