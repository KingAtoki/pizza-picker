import React from 'react'
import IngredientTile from '../../IngredientTileComponent/IngredientTile'


import './Ingredients.css';

import { fetchIngredients } from '../../../APIs/IngredientsAPI';

export default (props) => {
  /**
   * Would use fetch API to get data, using mock function to det ingredients
   */
  const ingredients = fetchIngredients();
  return (
    <div className='ingredient-container'>
      {ingredients.map(ingredient => <div><IngredientTile kind='ingredient' key={ingredient.id} id={ingredient.id} type={ingredient.type} selectIngredients={props.selectIngredients} /><hr /></div>)}
    </div>
  )
}