import React from 'react'

export default (props) => {
    let ingredients;
    if (props.ingredients) {
        ingredients = props.ingredients.reduce((acc, cur) => {
            if (cur === props.ingredients[0]) {
                return acc = acc += cur;
            } else {
                return acc = acc.concat(", " + cur);
            }
        }, '');
    }
  return (
    <div>
      {`You want a ${props.dough} pizza with ${ingredients || 'nothing'} on top.`}
    </div>
  )
}
