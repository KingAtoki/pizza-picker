import React from 'react';
import { shallow } from 'enzyme';
import {Route} from 'react-router-dom';
import App from '../App';

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
  it('Should change the dough to the selected dough', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().dough).toEqual('Thin Dough');
    wrapper.instance().selectDough('dough', 'Thick Dough');
    expect(wrapper.state().dough).toEqual('Thick Dough');
  });
  it('Should reset state back to thin dough on submit', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().selectDough('dough', 'Thick Dough');
    expect(wrapper.state().dough).toEqual('Thick Dough');
    wrapper.instance().submit();
    expect(wrapper.state().dough).toEqual('Thin Dough');
  });
  it('Should add the correct ingredient to state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().selectIngredients('Pepperoni');
    expect(wrapper.state().ingredients).toEqual(['Pepperoni']);
    wrapper.instance().selectIngredients('Ham');
    expect(wrapper.state().ingredients).toEqual(['Pepperoni', 'Ham']);
  });

  it('Should take out correct ingredient when selectIngredient is called with it already in state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().selectIngredients('Pepperoni');
    wrapper.instance().selectIngredients('Ham');
    wrapper.instance().selectIngredients('Pepperoni');
    expect(wrapper.state().ingredients).toEqual(['Ham']);
  });
  it('Should have a path to /dough', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.childAt(2).props().path).toEqual('/dough');
  })
  it('Should have a path to /ingredients', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.childAt(3).props().path).toEqual('/ingredients');
  })
  it('Should have a path to /review', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.childAt(4).props().path).toEqual('/review');
  })
})

