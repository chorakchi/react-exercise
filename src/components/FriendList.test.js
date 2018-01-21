import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from './FriendList';
import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import Enzyme, { shallow , mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() });


describe('renders without crashing components AddFriendInput', () => {

  const actions = {
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    starFriend: starFriend
  };

  const mock = [{name:'hi',gender:'MALE',starred:true},{name:'Mohammad',gender:'MALE',starred:true}]

  let props={
    actions: actions,
    friends: mock
  }


  it('should render FriendList', () => {
    expect(render(<FriendList {...props}/>).find('div').length).toBe(2);
  })
})



test('FriendList renders without crashing', () => {
  const actions = {
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    starFriend: starFriend
  };
  const mock = [{name:'hi',gender:'MALE',starred:true},{name:'Mohammad',gender:'MALE',starred:true}]
  const div = document.createElement('div');
  ReactDOM.render(<FriendList friends={mock} actions={addFriend}/>, div);
});