import React from 'react'
import {Link} from 'react-router-dom';
import './Ingredients.css';
import IngredientTile from '../../IngredientTileComponent/IngredientTile'



import { fetchIngredients } from '../../../APIs/IngredientsAPI';

export default (props) => {
  /**
   * Would use fetch API to get data, using mock function to det ingredients
   */
  const ingredients = fetchIngredients();
  return (
    <div>
      <div className='ingredient-container'>
        {ingredients.map(ingredient => <div key={ingredient.id}><IngredientTile kind='ingredient' type={ingredient.type} price={ingredient.price} selectIngredients={props.selectIngredients} selectedIngredients={props.selectedIngredients}/><hr /></div>)}
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to='/dough' style={{color: 'crimson', textDecoration: 'none'}}><h2>Back to Dough</h2></Link>
          <Link to='/review' style={{color: 'darkgreen', textDecoration: 'none'}}><h2>Review My Order</h2></Link>
        </div>
      </div>
      <h4>All ingredients are €0.50 each.</h4>
    </div>
  )
}