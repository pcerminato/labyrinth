import React, { createContext, useState, useEffect } from "react";
import { fetchGame } from "../../services";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState();
  const [playerPosition, setPlayerPosition] = useState(1);
  const [movementsLeft, setMovementsLeft] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const gameData = await fetchGame(123);
        setGame(gameData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (game) {
      setPlayerPosition(game.initialPosition);
      setMovementsLeft(game.maxMovents);
    }
  }, [game]);

  const values = {
    game,
    playerPosition,
    setPlayerPosition,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
