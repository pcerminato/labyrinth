import React from "react";
import Cell from "../Cell";
import Player from "../Player";
import Board from "./styled";

export default () => {
  // TODO: get game from context
  const game = {
    initialPosition: 3,
    columns: 4,
    cells: [
      { id: 1, type: "start" },
      { id: 2, type: "regular" },
      { id: 3, type: "regular" },
      { id: 4, type: "blocked" },
      { id: 5, type: "blocked" },
      { id: 6, type: "blocked" },
      { id: 7, type: "regular" },
      { id: 8, type: "target" },
    ],
  };

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
