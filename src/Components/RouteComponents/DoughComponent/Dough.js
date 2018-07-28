import React from 'react'
import Tile from '../../TileComponents/Tile';

import './Dough.css';

import { fetchDoughs } from '../../../APIs/DoughAPI';

export default () => {
  /**
   * Would use fetch API to get data, using mock function to det doughs
   */
  const doughs = fetchDoughs();
  
  return (
    <div className='dough-container'>
      {doughs.map(dough => <Tile key={dough.id} doughType={dough.type} description={dough.description}/>)}
    </div>
  )
}
