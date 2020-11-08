import React, { createContext, useState, useEffect } from "react";
import { fetchGame } from "../../services";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameIsReady, setGameIsReady] = useState(false);
  const [gameIsWon, setGameIsWon] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(1);
  const [movementsLeft, setMovementsLeft] = useState();

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
      setGameIsReady(true);
    }
  }, [game]);

  useEffect(() => {
    if (movementsLeft === 0) {
      setGameIsOver(true);
    }
  }, [movementsLeft]);

  const values = {
    game,
    gameIsOver,
    gameIsReady,
    gameIsWon,
    movementsLeft,
    playerPosition,
    setGameIsOver,
    setMovementsLeft,
    setPlayerPosition,
    setGameIsWon,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
