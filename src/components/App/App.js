import React from "react";
import Board from "../Board";
import { GameContextProvider } from "../Store";

const App = () => (
  <GameContextProvider>
    <Board />
  </GameContextProvider>
);

export default App;
