import React from 'react'

import './IngredientTile.css';

export default (props) => {
  return (
    <div className='ingredient-tile'>
      {props.type}
      <div className='add-ingredient-btn'>+</div>
    </div>
  )
}
