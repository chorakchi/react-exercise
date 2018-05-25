import {assert} from 'chai';
import calculateMaxMoves from '../../../src/common/calculateMaxMoves';

it('Should properly calculate maximum moves in a game', () => {
  assert.equal(calculateMaxMoves(6, 3), 6);
  assert.equal(calculateMaxMoves(7, 3), 7);
  assert.equal(calculateMaxMoves(8, 4), 11);
  assert.equal(calculateMaxMoves(9, 5), 16);
  assert.equal(calculateMaxMoves(10, 6), 21);
  assert.equal(calculateMaxMoves(20, 8), 57);
});
