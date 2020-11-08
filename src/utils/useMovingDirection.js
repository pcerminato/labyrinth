import { useEffect, useState } from "react";
import {
  keyDownCode,
  keyUpCode,
  keyRightCode,
  keyLeftCode,
} from "../configs/constants";

/**
 * Returns the direction triggered by the user: up, down, right, left, undefined
 */
export default () => {
  const [direction, setDirection] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  /*
   * NOTE on @lastUpdate state >
   * I need to use a lastUptade state so I can detect a state change in the case that the direction
   * keeps with the same value. Example, if the user moves twice up the value for direction is twice "up"
   * and react wouldn't trigger a state update as it's the same value "up".
   */

  const handleKeyPress = (event) => {
    event.preventDefault();
    event.stopPropagation();

    switch (event.keyCode) {
      case keyUpCode:
        setDirection("up");
        break;
      case keyDownCode:
        setDirection("down");
        break;
      case keyLeftCode:
        setDirection("left");
        break;
      case keyRightCode:
        setDirection("right");
        break;
      default:
        setDirection(undefined);
    }

    setLastUpdate(Date.now());
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  });

  return { direction, lastUpdate };
};
