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

    it('should render AddFriendInput', () => {
        expect(wrapper.find('div').length).toBe(1);
      })

      it('input should render in  AddFriendInput', () => {
        expect(wrapper.find('input').length).toBe(3);
      })

      it('img should render in  AddFriendInput', () => {
        expect(wrapper.find('img').length).toBe(2);
      })

      it('GenderInput should render in  AddFriendInput', () => {
        expect(mount(<AddFriendInput/>).find('GenderInput').length).toBe(0);
      })

})