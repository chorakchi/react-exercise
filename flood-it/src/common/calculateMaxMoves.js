/**
 * Helper function for calculating maximum moves allowed during one game.
 *
 * @param {Number} size Size of a game field
 * @param {Number} count How many colors are in game
 * @returns {Number} Returns a count of maximum moves allowed
 */
export default function (size, count) {
  return Math.floor(30 * ((size + size) * count) / ((14 + 14) * 6));
}
