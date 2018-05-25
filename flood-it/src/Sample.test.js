import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() });

describe('renders without crashing components sample', () => {
  it('should render Sample', () => {

    expect(shallow(<Sample name="hi" />).find('.sample').length).toBe(1);

})
})