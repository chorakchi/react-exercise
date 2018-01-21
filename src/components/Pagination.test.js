import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';
import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import Enzyme, { shallow , mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() });

  
let  onChangePage = function () {
  // update state with new page of items
}
  

describe('renders without crashing components AddFriendInput', () => {

  it('should render self and subcomponents', () => {



    // it 'expect' not corect i shohde trace it
    expect(render(<Pagination items={[0,1,2,3,4,5,6]} onChangePage={onChangePage} initialPage={1}/>).find('div').length).toBe(0);
  })
})


