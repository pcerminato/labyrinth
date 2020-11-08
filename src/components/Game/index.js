import React, { useContext, useEffect, useState } from "react";
import Board from "../Board";
import { useMovingDirection, useNextCellPosition } from "../../utils";
import { GameContext } from "../Store";
import { cellTypeBlocked, cellTypeTarget } from "../../configs/constants";
import Game from "./Game";
import StatusBar from "../StatusBar";
import OptionsBar from "../OptionsBar";
import HowToPlay from "../HowToPlay";

export default () => {
  const {
    game,
    gameReset,
    gameIsOver,
    gameIsReady,
    gameIsWon,
    movementsLeft,
    moveToNextLevel,
    playerPosition,
    setGameIsWon,
    setMovementsLeft,
    setPlayerPosition,
  } = useContext(GameContext);
  const { direction, lastUpdate } = useMovingDirection();
  const getNextCellPosition = useNextCellPosition();
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (gameIsReady && !gameIsOver && !gameIsWon) {
      const nextPosition = getNextCellPosition(game, playerPosition, direction);

      if (nextPosition) {
        const nextCell = game.cells[nextPosition - 1];

        if ((nextCell, nextCell.type === cellTypeBlocked)) {
          console.log("Cannot move! Path is blocked!");
          return;
        }

        if ((nextCell, nextCell.type === cellTypeTarget)) {
          setGameIsWon(true);
        }

        setPlayerPosition(nextPosition);
        setMovementsLeft(movementsLeft - 1);
      }
    }
  }, [lastUpdate]);

  if (!gameIsReady) return <div>Loading game</div>;

  return (
    <Game>
      <Board />
      <StatusBar
        isOver={gameIsOver}
        isWon={gameIsWon}
        movementsLeft={movementsLeft}
      />
      <OptionsBar>
        {gameIsOver || gameIsWon ? (
          <button onClick={gameReset}>Play again</button>
        ) : null}
        {gameIsWon ? (
          <button onClick={moveToNextLevel}>Next level</button>
        ) : null}
      </OptionsBar>
      <button className="help" onClick={() => setShowHelp(!showHelp)}>
        How to play
      </button>
      {showHelp ? <HowToPlay /> : null}
    </Game>
  );
};
