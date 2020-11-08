import React, { createContext, useState, useEffect } from "react";
import { fetchGame } from "../../services";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameIsReady, setGameIsReady] = useState(false);
  const [gameIsWon, setGameIsWon] = useState(false);
  const [level, setLevel] = useState(1);
  const [hasNextLevel, setHasNextLevel] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(1);
  const [movementsLeft, setMovementsLeft] = useState();

  useEffect(() => {
    setGameIsReady(false);
    (async () => {
      try {
        const gameData = await fetchGame(level);
        setGame(gameData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [level]);

  useEffect(() => {
    if (game) {
      resetDefaults();
      setPlayerPosition(game.initialPosition);
      setMovementsLeft(game.maxMovents);
      setLevel(game.level);
      if (game.nextLevel) {
        setHasNextLevel(true);
      }
      setGameIsReady(true);
    }
  }, [game]);

  useEffect(() => {
    if (movementsLeft === 0 && !gameIsWon) {
      setGameIsOver(true);
    }
  }, [movementsLeft]);

  // resets current game
  const gameReset = () => {
    setGameIsOver(false);
    setGameIsWon(false);
    setPlayerPosition(game.initialPosition);
    setMovementsLeft(game.maxMovents);
  };

  const resetDefaults = () => {
    setGameIsOver(false);
    setGameIsWon(false);
    setHasNextLevel(false);
  };

  const moveToNextLevel = () => {
    if (game.nextLevel) {
      gameReset();
      setLevel(game.nextLevel);
    }
  };

  const values = {
    game,
    gameIsOver,
    gameIsReady,
    gameIsWon,
    gameReset,
    hasNextLevel,
    level,
    movementsLeft,
    moveToNextLevel,
    playerPosition,
    setGameIsOver,
    setMovementsLeft,
    setPlayerPosition,
    setGameIsWon,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
