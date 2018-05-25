/**
 * Helper function for generating a new game field.
 * It creates an array with specified size and fills it with random colors indexes.
 * Keep in mind that game field is a rectangle, so size of a field is actually [size, size].
 *
 * @param {Number} size Size of a game field, i.e. 14
 * @param {Number} count How many random colors to apply
 * @returns {Array<Number>} Returns an array of game field with a random colors indexes inside
 */
export default function (size, count) {
  return Array
    .from({length: size * size})
    .map(() => Math.floor(Math.random() * count));
}
