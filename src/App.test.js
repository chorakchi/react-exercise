import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'


Enzyme.configure({ adapter: new Adapter() });

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('renders without crashing components App', () => {
  it('should render App', () => {

    expect(shallow(<App />).find('.App').length).toBe(1);

})
})