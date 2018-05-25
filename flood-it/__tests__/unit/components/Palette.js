import 'react-native';
import React from 'react';
import {assert} from 'chai';
import {Palette} from '../../../src/components/Palette';
import renderer from 'react-test-renderer';

it('Should properly render the palette', () => {
  const nop = () => true;
  const tree = renderer.create(<Palette colorsCount={3} onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 3);
  assert.deepEqual(tree.props.style, {flexDirection: 'row'});
  assert.ok(tree.children.every(child => child.type === 'View'));
});
