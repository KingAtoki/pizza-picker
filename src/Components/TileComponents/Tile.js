import React from 'react'
import './Tile.css';

export default (props) => {
  return (
    <div className='tile'>
      <h1>{props.doughType}</h1>
      <h4>{props.description}</h4>
    </div>
  )
}
