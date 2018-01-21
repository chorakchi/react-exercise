import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow ,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'


Enzyme.configure({ adapter: new Adapter() });

describe('renders without crashing components App', () => {

  it('should render App', () => {
    expect(shallow(<App />).find('div').length).toBe(1);
})

it('should render App', () => {
  expect(shallow(<App />).find('Provider').length).toBe(1);
})

it('should render App', () => {
  expect(mount(<App />).find('FriendListApp').length).toBe(1);
})
})

