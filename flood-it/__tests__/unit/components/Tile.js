import 'react-native';
import {assert} from 'chai';
import React from 'react';
import {Tile} from '../../../src/components/Tile';
import renderer from 'react-test-renderer';

it('Should properly render a black tile with sizes 30x30', () => {
  const tree = renderer.create(<Tile color="black" width={30} height={30}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.deepEqual(tree.props.style, {backgroundColor: 'black', width: 30, height: 30});
  assert.isNull(tree.children);
});

it('Should properly render a black tile with sizes 30x30 and custom style', () => {
  const tree = renderer.create(<Tile color="black" width={30} height={30} style={{borderColor: 'black'}}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.deepEqual(tree.props.style, {borderColor: 'black', backgroundColor: 'black', width: 30, height: 30});
  assert.isNull(tree.children);
});

it('Should properly render a touchable tile with sizes 30x30', () => {
  const nop = () => true;
  const tree = renderer.create(<Tile color="black" width={30} height={30} onPress={nop}/>).toJSON();

  assert.equal(tree.children.length, 1);
  assert.deepEqual(tree.children[0].props.style, {backgroundColor: 'black', width: 30, height: 30});
});
