import {assert} from 'chai';
import * as TYPES from '../../../src/actions/types';
import reducer from '../../../src/reducers/index';

const currentState = {
  currentLevel: 5,
  fieldSize: 10,
  colorsCount: 4,
  field: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  currentColorIndex: 2,
  maxMoves: 10,
  spentMoves: 4,
  done: 25
};

it('Should properly handle run color', () => {
  const field = [0, 0, 1, 1];
  const state = reducer({...currentState, field}, {type: TYPES.RUN_COLOR, color: 1});

  assert.deepEqual(state.field, [1, 1, 1, 1]);
  assert.equal(state.currentColorIndex, 1);
  assert.equal(state.spentMoves, 5);
  assert.equal(state.done, 100);
});

it('Should properly handle new game', () => {
  const state = reducer(currentState, {type: TYPES.NEW_GAME});

  assert.ok(state.field.every(i => i >= 0));
  assert.ok(state.field.every(i => i < 4));
  assert.equal(state.currentColorIndex, state.field[0]);
  assert.isNumber(state.maxMoves);
  assert.ok(state.maxMoves > 0);
  assert.equal(state.spentMoves, 0);
  assert.equal(state.done, 0);
});

it('Should properly handle increase difficulty', () => {
  const state = reducer(currentState, {type: TYPES.INCREASE_DIFFICULTY});

  assert.equal(state.currentLevel, 6);
  assert.equal(state.fieldSize, 11);
  assert.equal(state.colorsCount, 4);
});

it('Should properly handle decrease difficulty', () => {
  const state = reducer(currentState, {type: TYPES.DECREASE_DIFFICULTY});

  assert.equal(state.currentLevel, 4);
  assert.equal(state.fieldSize, 9);
  assert.equal(state.colorsCount, 4);
});
