import React from 'react';
import ReactDOM from 'react-dom';
import FriendListItem from './FriendListItem';
import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import Enzyme, { shallow , mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() });

const props = {
  key:0,
  id:0,
  name:'Mohammad',
  gender:'MALE',
  starred:true
}

describe('renders without crashing components AddFriendInput', () => {

  it('should render FriendListItem', () => {
    expect(shallow(<FriendListItem {...props}/>).find('div').length).toBe(5);
  })
})



test('FriendListItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FriendListItem {...props}/>, div);
});