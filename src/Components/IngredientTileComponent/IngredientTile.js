import React from 'react'

import './IngredientTile.css';

export default (props) => {
  return (
    <div className='ingredient-tile'>
      {props.type}
      {props.selectedIngredients.includes(props.type) ? <div className='ingredient-tile__btn_added' onClick={() => props.selectIngredients(props.type)}>-</div> : <div className='ingredient-tile__btn_add' onClick={() => props.selectIngredients(props.type)}>+</div>}
    </div>
  )
}
