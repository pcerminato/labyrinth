import React, { useContext, useEffect } from "react";
import Board from "../Board";
import { useMovingDirection, useNextCellPosition } from "../../utils";
import { GameContext } from "../Store";
import { cellTypeBlocked, cellTypeTarget } from "../../configs/constants";

export default () => {
  const {
    game,
    gameIsOver,
    gameIsReady,
    gameIsWon,
    movementsLeft,
    playerPosition,
    setGameIsWon,
    setMovementsLeft,
    setPlayerPosition,
  } = useContext(GameContext);
  const { direction, lastUpdate } = useMovingDirection();
  const getNextCellPosition = useNextCellPosition();

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

  return <Board />;
};
