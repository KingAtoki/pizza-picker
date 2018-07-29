import React from 'react'
import Tile from '../../TileComponents/Tile';

import './Ingredients.css';

import { fetchIngredients } from '../../../APIs/IngredientsAPI';

export default (props) => {
  /**
   * Would use fetch API to get data, using mock function to det ingredients
   */
  const ingredients = fetchIngredients();
  return (
    <div className='ingredient-container'>
      {ingredients.map(ingredient => <p kind='ingredient' key={ingredient.id} id={ingredient.id} type={ingredient.type} selectIngredients={props.selectIngredients}>{ingredient.type}</p>)}
    </div>
  )
}