import React from 'react';
import ReactDOM from 'react-dom';
import FriendListApp from './FriendListApp';
import Enzyme, { shallow ,mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import { connect } from 'react-redux';
import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';

let  wwraper =  connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})

Enzyme.configure({ adapter: new Adapter() });

describe('renders without crashing components FriendListApp', () => {

  it('should render FriendListApp', () => {
    // it 'expect' not corect i shohde trace it
    expect(render(<wwraper />).find('div').length).toBe(0);
})

})

function mapStateToProps(state) {
  return state
}



