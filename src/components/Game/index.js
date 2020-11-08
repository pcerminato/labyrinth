import React, { useContext, useEffect } from "react";
import Board from "../Board";
import { useMovingDirection, useNextCellPosition } from "../../utils";
import { GameContext } from "../Store";

export default () => {
  const { game, playerPosition, setPlayerPosition } = useContext(GameContext);
  const { direction, lastUpdate } = useMovingDirection();
  const getNextCellPosition = useNextCellPosition();

  useEffect(() => {
    if (game) {
      const nextPosition = getNextCellPosition(game, playerPosition, direction);
      setPlayerPosition(nextPosition);
    }
  }, [lastUpdate]);

  return <Board />;
};
