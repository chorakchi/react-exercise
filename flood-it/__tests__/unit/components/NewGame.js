import 'react-native';
import React from 'react';
import {assert} from 'chai';
import {NewGame} from '../../../src/components/NewGame';
import renderer from 'react-test-renderer';

it('Should properly render new game button', () => {
  const nop = () => true;
  const tree = renderer.create(<NewGame onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 1);
  assert.equal(tree.children[0].type, 'Image');
  assert.deepEqual(tree.children[0].props.style, {width: 50, height: 50});
});
