import React from 'react';
import ReactDOM from 'react-dom';
import GenderInput from './GenderInput';
import Enzyme, { shallow , mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() });

const props = {
  values:["MALE","FEMALE"],
  label:["Mele","Female"],
  name:"gender"
}

describe('renders without crashing components AddFriendInput', () => {

  it('should render FriendListItem', () => {
    expect(shallow(<GenderInput {...props}/>).find('div').length).toBe(1);
  })
})