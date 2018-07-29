import React from 'react'
import './DoughTile.css';

export default (props) => {
  return (
    <div className='tile'>
      <h2>{props.type}</h2>
      <h4>{props.description}</h4>
      <h4>{props.price}</h4>
      {props.selectedDough === props.type ? <div className='added-btn' onClick={() => props.selectDough('dough', props.type)}>Added</div> : <div className='add-dough-btn' onClick={() => props.selectDough('dough', props.type)}>Add</div>}
    </div>
  )
}
