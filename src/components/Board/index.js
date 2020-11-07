import React, { useContext } from "react";
import Cell from "../Cell";
import Player from "../Player";
import Board from "./styled";
import { GameContext } from "../Store";

export default () => {
  const { game } = useContext(GameContext);

  if (!game) return <div>Loading board</div>;

  const activeCell = game.initialPosition;

  return (
    <Board columns={game.columns}>
      {game.cells.map(({ id, type }) => {
        return (
          <Cell id={id} type={type} key={id}>
            {activeCell === id ? <Player /> : null}
          </Cell>
        );
      })}
    </Board>
  );
};
