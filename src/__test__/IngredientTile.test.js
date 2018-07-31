import React from 'react';

import {shallow} from 'enzyme';

import IngredientTile from '../Components/IngredientTileComponent/IngredientTile'
import App from '../App';



describe('<IngredientTile />', () => {
    it('Should render a tile', () => {
        const wrapper = shallow(<IngredientTile type='Pepperoni' selectedIngredients={['Pepperoni']}/>);
        expect(wrapper.length).toEqual(1);
    });
    it('Should render the added button if it was selected', () => {
        const wrapper = shallow(<IngredientTile type='Pepperoni' selectedIngredients={['Pepperoni']}/>);
        wrapper.findWhere(div => div.hasClass('added-ingredient-btn'));
        expect(wrapper.length).toEqual(1);
    });
    it('Should select ingredient and add it to state', () => {
        const appWrapper = shallow(<App />)
        const selectIngredients = appWrapper.instance().selectIngredients;
        const ingredientWrapper = shallow(<IngredientTile type='Ham' selectedIngredients={[]} selectIngredients={selectIngredients}/>);
        const button = ingredientWrapper.findWhere(div => div.hasClass('ingredient-tile__btn'));
        button.prop('onClick')();
        expect(appWrapper.state().ingredients).toEqual(['Ham']);
    });
    it('Should deselect ingredient and delete it from state', () => {
        const appWrapper = shallow(<App />)
        appWrapper.setState({ingredients: ['Ham']})
        const selectIngredients = appWrapper.instance().selectIngredients;
        const ingredientWrapper = shallow(<IngredientTile type='Ham' selectedIngredients={['Ham']} selectIngredients={selectIngredients}/>);
        const button = ingredientWrapper.findWhere(div => div.hasClass('ingredient-tile__btn ingredient-tile__btn_added'));
        button.prop('onClick')();
        expect(appWrapper.state().ingredients).toEqual([]);
    });
})