import React from 'react';

import {shallow} from 'enzyme';

import DoughTile from '../Components/DoughTileComponents/DoughTile';
import App from '../App';



describe('<DoughTile />', () => {
    it('should render the type', () => {
        const wrapper = shallow(<DoughTile type='Thin Dough'/>);
        expect(wrapper.find('h2').html()).toContain('Thin Dough');
    });
    it('should render the description', () => {
        const wrapper = shallow(<DoughTile description='a description'/>);
        expect(wrapper.find('h4').first().html()).toContain('a description');
    });
    it('should render the price', () => {
        const wrapper = shallow(<DoughTile price='price'/>);
        expect(wrapper.childAt(2).html()).toContain('price');
    });
    it('should show added btn if it is selected', () => {
        const wrapper = shallow(<DoughTile selectedDough='Thin Dough' type='Thin Dough'/>);
        const wrongDiv = wrapper.findWhere(div => div.hasClass('add-dough-btn'));
        const rightDiv = wrapper.findWhere(div => div.hasClass('added-btn'));
        expect(wrongDiv.length).toEqual(0);
        expect(rightDiv.length).toEqual(1);
    });
    it('should add dough to state when dough is selected', () => {
        const appWrapper = shallow(<App />);
        const selectDough = appWrapper.instance().selectDough;
        const doughWrapper = shallow(<DoughTile selectDough={selectDough} selectedDough='Thin Dough' type='Thick Dough'/>);
        const button = doughWrapper.findWhere(div => div.hasClass('add-dough-btn'));
        button.prop('onClick')();
        expect(appWrapper.state().dough).toEqual('Thick Dough');
    });
    
})