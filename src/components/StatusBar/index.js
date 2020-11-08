import React from "react";
import StatusBar from "./StatusBar";
import OptionsBar from "../OptionsBar";

export default ({ isOver, isWon, movementsLeft }) => {
  return (
    <StatusBar>
      <OptionsBar>
        {isOver ? <div className="game-over">Game over</div> : null}
        {isWon ? <div className="game-won">You won!</div> : null}
        <div>Movements left: {movementsLeft}</div>
      </OptionsBar>
    </StatusBar>
  );
};
