import * as TYPES from '../actions/types';
import calculateMaxMoves from '../common/calculateMaxMoves';
import getAdjacentIndexes from '../common/getAdjacentIndexes';
import generateNewField from '../common/generateNewField';

const MINIMUM_COLORS_COUNT = 3;
const MAXIMUM_COLORS_COUNT = 8;
const MINIMUM_FIELD_SIZE = 6;
const MAXIMUM_FIELD_SIZE = 20;

const initialField = generateNewField(MINIMUM_FIELD_SIZE, MINIMUM_COLORS_COUNT);
const initialState = {
  currentLevel: 1,
  fieldSize: MINIMUM_FIELD_SIZE,
  colorsCount: MINIMUM_COLORS_COUNT,
  field: initialField,
  currentColorIndex: initialField[0],
  maxMoves: calculateMaxMoves(MINIMUM_FIELD_SIZE, MINIMUM_COLORS_COUNT),
  spentMoves: 0,
  done: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR: {
      const field = state.field.slice(0);
      const oldColor = field[0];
      const newColor = action.color;
      const job = [0];

      while (job.length) {
        const index = job.pop();
        const {top, right, bottom, left} = getAdjacentIndexes(field.length, index);

        field[index] = newColor;

        if (field[top] === oldColor) job.push(top);
        if (field[right] === oldColor) job.push(right);
        if (field[bottom] === oldColor) job.push(bottom);
        if (field[left] === oldColor) job.push(left);
      }

      const spentMoves = state.spentMoves + 1;
      const done = Math.floor(field.filter(colorIndex => colorIndex === newColor).length * 100 / field.length);

      return {...state, field, currentColorIndex: newColor, spentMoves, done};
    }

    case TYPES.NEW_GAME: {
      const {fieldSize, colorsCount} = state;
      const field = generateNewField(fieldSize, colorsCount);
      const currentColorIndex = field[0];
      const maxMoves = calculateMaxMoves(fieldSize, colorsCount);
      const spentMoves = 0;
      const done = 0;

      return {...state, field, currentColorIndex, maxMoves, spentMoves, done};
    }

    case TYPES.INCREASE_DIFFICULTY: {
      if (state.fieldSize === MAXIMUM_FIELD_SIZE && state.colorsCount === MAXIMUM_COLORS_COUNT) return state;

      const currentLevel = state.currentLevel + 1;
      const fieldSize = state.fieldSize === MAXIMUM_FIELD_SIZE ? MINIMUM_FIELD_SIZE : state.fieldSize + 1;
      const colorsCount = state.fieldSize === MAXIMUM_FIELD_SIZE ? state.colorsCount + 1 : state.colorsCount;

      return {...state, currentLevel, fieldSize, colorsCount};
    }

    case TYPES.DECREASE_DIFFICULTY: {
      if (state.fieldSize === MINIMUM_FIELD_SIZE && state.colorsCount === MINIMUM_COLORS_COUNT) return state;

      const currentLevel = state.currentLevel - 1;
      const fieldSize = state.fieldSize === MINIMUM_FIELD_SIZE ? MAXIMUM_FIELD_SIZE : state.fieldSize - 1;
      const colorsCount = state.fieldSize === MINIMUM_FIELD_SIZE ? state.colorsCount - 1 : state.colorsCount;

      return {...state, currentLevel, fieldSize, colorsCount};
    }

    default:
      return state;
  }
}
