import React from 'react'
import './Tile.css';

export default (props) => {
  return (
    <div className='tile'>
      <h2>{props.type}</h2>
      <h4>{props.description || null}</h4>
      {props.kind === 'ingredient' ? <h4>€0.50</h4> : null}
      {props.kind === 'dough' ? <div className='plus' onClick={() => props.selectDough('dough', props.type)}>+</div> : null}
      {props.kind === 'ingredient' ? <div className='plus' onClick={() => props.selectIngredients(props.type)}>+</div> : null}
    </div>
  )
}
