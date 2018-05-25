import {assert} from 'chai';
import * as TYPES from '../../../src/actions/types';

it('Should properly export all the action types', () => {
  assert.equal(TYPES.RUN_COLOR, 'RUN_COLOR');
  assert.equal(TYPES.NEW_GAME, 'NEW_GAME');
  assert.equal(TYPES.INCREASE_DIFFICULTY, 'INCREASE_DIFFICULTY');
  assert.equal(TYPES.DECREASE_DIFFICULTY, 'DECREASE_DIFFICULTY');
});
