import React, { useContext } from "react";
import Cell from "../Cell";
import Player from "../Player";
import Board from "./styled";
import { GameContext } from "../Store";

export default () => {
  const { game, gameIsReady, playerPosition } = useContext(GameContext);

  if (!gameIsReady) return <div>Loading board</div>;

  return (
    <Board columns={game.columns}>
      {game.cells.map(({ id, type }) => {
        return (
          <Cell id={id} type={type} key={id}>
            {playerPosition === id ? <Player /> : null}
          </Cell>
        );
      })}
    </Board>
  );
};
