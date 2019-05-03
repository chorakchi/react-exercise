import React from 'react';
import ReactDOM from 'react-dom';
import PopUp from './index';
import Enzyme, { shallow , mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

let props={
}

describe('renders without crashing components reat', () => {

  it('should render FriendList', () => {
    expect(render(<PopUp {...props} />).find('div').length).toBe(1);
  })
})

test('reat renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopUp {...props}/>, div);
});