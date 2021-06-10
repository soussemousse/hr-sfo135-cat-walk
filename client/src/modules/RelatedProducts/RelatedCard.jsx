import React from 'react';

function RelatedCard (props) {
  return (
    <article className='card'>
      <span className='upperleft'><label>&#9733;<input type='radio' className='radio'></input></label></span>
      <img></img>
      <small>{props.product.category}</small>
      <h4>{props.product.name}</h4>
      <span>{props.product.default_price}</span><br></br>
      <span>Rating</span>
    </article>
  )
}

export default RelatedCard;