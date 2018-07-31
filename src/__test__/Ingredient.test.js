import React from 'react';
import {shallow} from 'enzyme';

import Ingredients from '../Components/RouteComponents/IngredientsComponents/Ingredients'
import IngredientTile from '../Components/IngredientTileComponent/IngredientTile'
import {fetchIngredients} from '../APIs/IngredientsAPI'


describe('<Ingredients />', () => {
    it('Should render menu without crashing', () => {
        const wrapper = shallow(<Ingredients />);
        expect(wrapper).toHaveLength(1);
    });
    it('Should properly get ingredients', () => {
        const wrapper = shallow(<Ingredients />);
        expect(wrapper.find(IngredientTile)).toHaveLength(fetchIngredients().length);
    });
})