export default () =>
  function getNextCellPosition(
    currentGame,
    currentPosition = 1,
    direction = undefined
  ) {
    const { columns, cells } = currentGame;
    let newPosition = undefined; // defaults to undefined

    if (direction === "up") {
      const position = currentPosition - columns;
      // validates that the new position is within the board limits
      if (position >= 1) {
        newPosition = position;
      }
    }

    if (direction === "down") {
      const position = currentPosition + columns;
      // validates that the new position is within the board limits
      if (position <= cells.length) {
        newPosition = position;
      }
    }

    if (direction === "right") {
      // can only move if element to the right
      if (currentPosition % columns !== 0) {
        newPosition = currentPosition + 1;
      }
    }

    if (direction === "left") {
      // can only move if elements to the left
      if (currentPosition % columns !== 1) {
        newPosition = currentPosition - 1;
      }
    }

    return newPosition;
  };
