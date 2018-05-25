import {assert} from 'chai';
import getAdjacentIndexes from '../../../src/common/getAdjacentIndexes';

it('Should properly find adjacent indexes for every cell in an array 3x3[0]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 0);

  assert.equal(top, -1);
  assert.equal(right, 1);
  assert.equal(bottom, 3);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[1]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 1);

  assert.equal(top, -1);
  assert.equal(right, 2);
  assert.equal(bottom, 4);
  assert.equal(left, 0);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[2]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 2);

  assert.equal(top, -1);
  assert.equal(right, -1);
  assert.equal(bottom, 5);
  assert.equal(left, 1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[3]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 3);

  assert.equal(top, 0);
  assert.equal(right, 4);
  assert.equal(bottom, 6);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[4]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 4);

  assert.equal(top, 1);
  assert.equal(right, 5);
  assert.equal(bottom, 7);
  assert.equal(left, 3);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[5]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 5);

  assert.equal(top, 2);
  assert.equal(right, -1);
  assert.equal(bottom, 8);
  assert.equal(left, 4);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[6]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 6);

  assert.equal(top, 3);
  assert.equal(right, 7);
  assert.equal(bottom, -1);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[7]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 7);

  assert.equal(top, 4);
  assert.equal(right, 8);
  assert.equal(bottom, -1);
  assert.equal(left, 6);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[8]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 8);

  assert.equal(top, 5);
  assert.equal(right, -1);
  assert.equal(bottom, -1);
  assert.equal(left, 7);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[0]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 0);

  assert.equal(top, -1);
  assert.equal(right, 1);
  assert.equal(bottom, 4);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[1]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 1);

  assert.equal(top, -1);
  assert.equal(right, 2);
  assert.equal(bottom, 5);
  assert.equal(left, 0);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[2]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 2);

  assert.equal(top, -1);
  assert.equal(right, 3);
  assert.equal(bottom, 6);
  assert.equal(left, 1);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[3]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 3);

  assert.equal(top, -1);
  assert.equal(right, -1);
  assert.equal(bottom, 7);
  assert.equal(left, 2);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[4]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 4);

  assert.equal(top, 0);
  assert.equal(right, 5);
  assert.equal(bottom, 8);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[5]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 5);

  assert.equal(top, 1);
  assert.equal(right, 6);
  assert.equal(bottom, 9);
  assert.equal(left, 4);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[6]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 6);

  assert.equal(top, 2);
  assert.equal(right, 7);
  assert.equal(bottom, 10);
  assert.equal(left, 5);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[7]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 7);

  assert.equal(top, 3);
  assert.equal(right, -1);
  assert.equal(bottom, 11);
  assert.equal(left, 6);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[8]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 8);

  assert.equal(top, 4);
  assert.equal(right, 9);
  assert.equal(bottom, 12);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[9]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 9);

  assert.equal(top, 5);
  assert.equal(right, 10);
  assert.equal(bottom, 13);
  assert.equal(left, 8);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[10]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 10);

  assert.equal(top, 6);
  assert.equal(right, 11);
  assert.equal(bottom, 14);
  assert.equal(left, 9);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[11]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 11);

  assert.equal(top, 7);
  assert.equal(right, -1);
  assert.equal(bottom, 15);
  assert.equal(left, 10);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[12]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 12);

  assert.equal(top, 8);
  assert.equal(right, 13);
  assert.equal(bottom, -1);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[13]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 13);

  assert.equal(top, 9);
  assert.equal(right, 14);
  assert.equal(bottom, -1);
  assert.equal(left, 12);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[14]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 14);

  assert.equal(top, 10);
  assert.equal(right, 15);
  assert.equal(bottom, -1);
  assert.equal(left, 13);
});

it('Should properly find adjacent indexes for every cell in an array 4x4[15]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(16, 15);

  assert.equal(top, 11);
  assert.equal(right, -1);
  assert.equal(bottom, -1);
  assert.equal(left, 14);
});
