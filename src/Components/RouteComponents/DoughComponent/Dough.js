import React from 'react'
import { Link } from 'react-router-dom';
import DoughTile from '../../DoughTileComponents/DoughTile';

import './Dough.css';

import { fetchDoughs } from '../../../APIs/DoughAPI';

export default (props) => {
  /**
   * Would use fetch API to get data, using mock function to det doughs
   */
  const doughs = fetchDoughs();

  return (
    <div>
      <div className='dough-container'>
        {doughs.map(dough => <DoughTile key={dough.id} type={dough.type} description={dough.description} selectDough={props.selectDough} selectedDough={props.selectedDough}/>)}
      </div>
      <Link to='/ingredients' style={{color: 'crimson', textDecoration: 'none'}}><h2>Add Ingredients</h2></Link>
    </div>
  )
}
