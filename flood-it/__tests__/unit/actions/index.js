import {assert} from 'chai';
import sinon from 'sinon';
import * as ACTIONS from '../../../src/actions/index';

it('Should properly handle RUN_COLOR action', () => {
  const thunk = ACTIONS.runColor(1);
  const dispatch = sinon.stub();
  const getState = sinon.stub().returns({maxMoves: 10, spentMoves: 2, done: 50});

  thunk(dispatch, getState);

  assert.ok(dispatch.calledOnce);
  assert.deepEqual(dispatch.getCall(0).args[0], {type: 'RUN_COLOR', color: 1});
});

it('Should properly handle RUN_COLOR action when game is over', () => {
  const thunk = ACTIONS.runColor(1);
  const dispatch = sinon.stub().returns(true);
  const getState = sinon.stub().returns({maxMoves: 10, spentMoves: 10, done: 50});

  thunk(dispatch, getState);

  assert.equal(dispatch.callCount, 3);
  assert.deepEqual(dispatch.getCall(0).args[0], {type: 'RUN_COLOR', color: 1});
  assert.deepEqual(dispatch.getCall(1).args[0], {type: 'DECREASE_DIFFICULTY'});
  assert.deepEqual(dispatch.getCall(2).args[0], {type: 'NEW_GAME'});
});

it('Should properly handle RUN_COLOR action when game is won', () => {
  const thunk = ACTIONS.runColor(1);
  const dispatch = sinon.stub().returns(true);
  const getState = sinon.stub().returns({maxMoves: 10, spentMoves: 8, done: 100});

  thunk(dispatch, getState);

  assert.equal(dispatch.callCount, 3);
  assert.deepEqual(dispatch.getCall(0).args[0], {type: 'RUN_COLOR', color: 1});
  assert.deepEqual(dispatch.getCall(1).args[0], {type: 'INCREASE_DIFFICULTY'});
  assert.deepEqual(dispatch.getCall(2).args[0], {type: 'NEW_GAME'});
});

it('Should properly handle NEW_GAME action', () => {
  const action = ACTIONS.newGame();

  assert.deepEqual(action, {type: 'NEW_GAME'});
});

it('Should properly handle INCREASE_DIFFICULTY action', () => {
  const action = ACTIONS.increaseDifficulty();

  assert.deepEqual(action, {type: 'INCREASE_DIFFICULTY'});
});

it('Should properly handle DECREASE_DIFFICULTY action', () => {
  const action = ACTIONS.decreaseDifficulty();

  assert.deepEqual(action, {type: 'DECREASE_DIFFICULTY'});
});
