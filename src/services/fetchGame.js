/**
 * fake async call to service
 * TODO; fetch games from server
 */
export default (gameId) => {
  const game = {
    initialPosition: 1,
    columns: 4,
    maxMovents: 7,
    cells: [
      { id: 1, type: "start" },
      { id: 2, type: "regular" },
      { id: 3, type: "regular" },
      { id: 4, type: "blocked" },
      { id: 5, type: "blocked" },
      { id: 6, type: "blocked" },
      { id: 7, type: "regular" },
      { id: 8, type: "regular" },
      { id: 9, type: "regular" },
      { id: 10, type: "regular" },
      { id: 11, type: "regular" },
      { id: 12, type: "blocked" },
      { id: 13, type: "target" },
      { id: 14, type: "regular" },
      { id: 15, type: "blocked" },
      { id: 16, type: "blocked" },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(game), 500);
  });
};
