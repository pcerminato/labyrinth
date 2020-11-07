import React, { createContext, useState, useEffect } from "react";
import { fetchGame } from "../../services";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState();

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

  const values = {
    game,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
