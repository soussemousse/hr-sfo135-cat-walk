import React from 'react';

function OutfitCard (props) {
  return (
    <article className='card'>
      <span className='upperleft' data-testid='outfitCard'><label>&#935;<input type='radio' className='radio' onClick={(event) => {console.log('delete item')}}></input></label></span>
      <img className='pictureThumbnail'></img><br></br>
      <div className='cardInfo'>
        <small>{props.product.category}</small>
        <h4>{props.product.name}</h4>
        <span>{props.product.default_price}</span><br></br>
        <span>Rating</span>
      </div>
    </article>
  )
}

export default OutfitCard;