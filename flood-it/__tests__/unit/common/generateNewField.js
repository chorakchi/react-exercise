import {assert} from 'chai';
import generateNewField from '../../../src/common/generateNewField';

it('Should properly generate new field with random color indexes', () => {
  const field = generateNewField(3, 3);

  assert.equal(field.length, 9);
  assert.ok(field.every(i => !isNaN(i)));
  assert.ok(field.every(i => i >= 0));
  assert.ok(field.every(i => i < 3));
});
