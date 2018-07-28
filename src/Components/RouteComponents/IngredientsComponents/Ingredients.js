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
      {ingredients.map(ingredient => <Tile kind='ingredient' key={ingredient.id} id={ingredient.id} type={ingredient.type} selectedIngredients={props.selectedIngredients} selectIngredients={props.selectIngredients}/>)}
    </div>
  )
}