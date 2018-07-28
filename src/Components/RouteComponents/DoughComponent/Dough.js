import React from 'react'
import Tile from '../../TileComponents/Tile';

import './Dough.css';

import { fetchDoughs } from '../../../APIs/DoughAPI';

export default (props) => {
  /**
   * Would use fetch API to get data, using mock function to det doughs
   */
  const doughs = fetchDoughs();

  return (
    <div className='dough-container'>
      {doughs.map(dough => <Tile kind='dough' key={dough.id} id={dough.id} type={dough.type} selectedDough={props.selectedDough} description={dough.description} selectDough={props.selectDough}/>)}
    </div>
  )
}
