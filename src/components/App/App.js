import React from "react";
import Game from "../Game";
import { GameContextProvider } from "../Store";

const App = () => (
  <GameContextProvider>
    <Game />
  </GameContextProvider>
);

export default App;
