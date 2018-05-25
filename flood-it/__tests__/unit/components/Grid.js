import 'react-native';
import React from 'react';
import {assert} from 'chai';
import {Grid} from '../../../src/components/Grid';
import renderer from 'react-test-renderer';

it('Should properly render the grid', () => {
  const field = [0, 0, 1, 1];
  const tree = renderer.create(<Grid field={field}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 2);
  assert.equal(tree.children[0].children.length, 2);
  assert.equal(tree.children[1].children.length, 2);
});
