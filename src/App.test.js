import React from 'react';
import { shallow } from 'enzyme';
import {Route} from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
  it('should have 4 <Route /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(4);
  });
  it('Should initially have Thin Dough selected', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().dough).toEqual('Thin Dough');
  });
})

