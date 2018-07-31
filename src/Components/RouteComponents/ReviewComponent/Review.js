import React from 'react';
import {Link} from 'react-router-dom';
import './Review.css';

// Changing the ingredients array into a string
const formatIngredients = (ingredientsArray) => {
    return ingredientsArray.reduce((acc, cur) => {
        if (cur === ingredientsArray[0]) {
            return acc = acc += cur;
        } else if (cur === ingredientsArray[ingredientsArray.length - 1]) {
            return acc = acc.concat(", and " + cur);
        } else {
            return acc = acc.concat(", " + cur);
        }
    }, '');
}

export default (props) => {
    let price = 5 + (0.5 * props.ingredients.length);
    let ingredients;
    if (props.ingredients) ingredients = formatIngredients(props.ingredients);
  return (
    <div>
        <div className='order-ticket__container'>
            {`You want a ${props.dough} pizza with ${ingredients || 'nothing'} on top. All for a total of €${price.toFixed(2)}!`}
        </div>
        <div>
            <Link to='/ingredients' style={{color: 'crimson', textDecoration: 'none'}}><h2>No, take me back one step.</h2></Link>
            <Link to='/' style={{color: 'crimson', textDecoration: 'none'}}><h2 className='order-ticket__btn' style={{color: 'darkgreen', textDecoration: 'none'}} onClick={() => props.submit()}>Yes that's correct!</h2></Link>
        </div>
    </div>
  )
}
