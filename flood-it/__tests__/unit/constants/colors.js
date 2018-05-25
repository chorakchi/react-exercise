import {assert} from 'chai';
import COLORS from '../../../src/constants/colors';

it('Should properly export all colors in a game', () => {
  assert.deepEqual(COLORS, [
    '#FF0000',
    '#FFFF00',
    '#00BB00',
    '#FFCC66',
    '#800080',
    '#00FFFF',
    '#6666FF',
    '#FF00FF'
  ]);
});
