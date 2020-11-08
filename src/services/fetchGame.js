import gamesDataObject from "../data/games";

export default (level = 1) => {
  const game = gamesDataObject[level];

  return new Promise((resolve, reject) => {
    if (!game) {
      return reject(`Theres no game set for level ${level}`);
    }
    setTimeout(() => resolve(game), 500);
  });
};
