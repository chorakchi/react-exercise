import 'react-native';
import {assert} from 'chai';
import React from 'react';
import {Stats} from '../../../src/components/Stats';
import renderer from 'react-test-renderer';

it('Should properly render stats component', () => {
  const tree = renderer.create(<Stats maxMoves={10} spentMoves={4}/>).toJSON();

  assert.equal(tree.type, 'Text');
  assert.equal(tree.children[0], 6);
  assert.deepEqual(tree.props.style, {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  });
});
