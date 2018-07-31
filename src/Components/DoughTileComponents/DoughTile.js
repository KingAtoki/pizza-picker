import React from 'react'
import './DoughTile.css';

export default (props) => {
  return (
    <div className='dough-tile'>
      <h2>{props.type}</h2>
      <h4>{props.description}</h4>
      <h4>{props.price}</h4>
      {props.selectedDough === props.type ? <div className='dough-tile__btn_added' onClick={() => props.selectDough('dough', props.type)}>Added</div> : <div className='dough-tile__btn_add' onClick={() => props.selectDough('dough', props.type)}>Add</div>}
    </div>
  )
}
