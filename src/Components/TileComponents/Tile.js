import React from 'react'
import './Tile.css';

export default (props) => {
  return (
    <div className='tile'>
      {props.doughType}
    </div>
  )
}
