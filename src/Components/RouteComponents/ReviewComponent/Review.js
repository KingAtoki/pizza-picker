import React from 'react';
import {Link} from 'react-router-dom';
import './Review.css';

export default (props) => {
    let price = 5 + (0.5 * props.ingredients.length);
    let ingredients;
    if (props.ingredients) {
        ingredients = props.ingredients.reduce((acc, cur) => {
            if (cur === props.ingredients[0]) {
                return acc = acc += cur;
            } else if (cur === props.ingredients[props.ingredients.length - 1]) {
                return acc = acc.concat(", and " + cur);
            } else {
                return acc = acc.concat(", " + cur);
            }
        }, '');
    }
  return (
    <div>
        <div className='order_ticket'>
            {`You want a ${props.dough} pizza with ${ingredients || 'nothing'} on top. All for a total of €${price.toFixed(2)}!`}
        </div>
        <div>
            <Link to='/ingredients' style={{color: 'crimson', textDecoration: 'none'}}><h2>No take me back one step.</h2></Link>
            <Link to='/' style={{color: 'crimson', textDecoration: 'none'}}><h2 className='order_btn' style={{color: 'darkgreen', textDecoration: 'none'}} onClick={() => props.submit()}>Yes that correct!</h2></Link>
        </div>
    </div>
  )
}
