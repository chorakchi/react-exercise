import React from 'react';
import ReactDOM from 'react-dom';
import AddFriendInput from './AddFriendInput';
import Enzyme, { shallow ,mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({ adapter: new Adapter() });


const wrapper = render(<AddFriendInput />);

test('AddFriendInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddFriendInput/>, div);
});


describe('renders without crashing components AddFriendInput', () => {

    it('should render App', () => {
        expect(wrapper.find('div').length).toBe(1);
      })

      it('should render App', () => {
        expect(wrapper.find('input').length).toBe(3);
      })

      it('should render App', () => {
        expect(wrapper.find('img').length).toBe(2);
      })

})