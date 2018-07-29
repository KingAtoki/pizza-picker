import React from 'react'

import './IngredientTile.css';

export default (props) => {
  return (
    <div className='ingredient-tile'>
      {props.type}
      {props.selectedIngredients.includes(props.type) ? <div className='added-ingredient-btn' onClick={() => props.selectIngredients(props.type)}>-</div> : <div className='add-ingredient-btn' onClick={() => props.selectIngredients(props.type)}>+</div>}
    </div>
  )
}
