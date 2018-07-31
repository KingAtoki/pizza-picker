import React from 'react'

import './IngredientTile.css';

export default (props) => {
  return (
    <div className='ingredient-tile'>
      {props.type}
      {/*Checking to see if the dough on state is equal to this ingredient, if it is shows the button to add or added button */}
      {props.selectedIngredients.includes(props.type) ? <div className='ingredient-tile__btn ingredient-tile__btn_added' onClick={() => props.selectIngredients(props.type)}>-</div> : <div className='ingredient-tile__btn' onClick={() => props.selectIngredients(props.type)}>+</div>}
    </div>
  )
}
