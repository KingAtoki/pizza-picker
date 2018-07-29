import React from 'react'
import './Tile.css';

export default (props) => {
  return (
    <div className='tile'>
      <h2>{props.type}</h2>
      <h4>{props.description}</h4>
      <h4>€5.00</h4>
      {props.selectedDough === props.type ? <div className='added-btn' onClick={() => props.selectDough('dough', props.type)}>Added</div> : <div className='add-btn' onClick={() => props.selectDough('dough', props.type)}>Add</div>}
    </div>
  )
}
