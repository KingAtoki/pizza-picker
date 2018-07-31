import React from 'react';
import {shallow} from 'enzyme';

import Dough from '../Components/RouteComponents/DoughComponent/Dough'
import DoughTile from '../Components/DoughTileComponents/DoughTile';
import {fetchDoughs} from '../APIs/DoughAPI'

import App from '../App';



describe('<Dough />', () => {
    it('Should render tiles without crashing', () => {
        const wrapper = shallow(<Dough selectedDough='Thin Dough'/>);
        expect(wrapper).toHaveLength(1);
    });
    it('Should properly get doughs', () => {
        const wrapper = shallow(<Dough selectedDough='Thin Dough'/>);
        expect(wrapper.find(DoughTile)).toHaveLength(fetchDoughs().length);
    });
})