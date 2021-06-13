import React from 'react';

const getRating = (object) => {
  let numOfRatings = 0;
  let ratingsSum = 0;

  for (var key in object) {
    const ratings = Number.parseInt(object[key]);
    const star = Number.parseInt(key);

    numOfRatings += ratings;
    ratingsSum += (ratings * star);
  }

  if (ratingsSum === 0 || numOfRatings === 0) {
    return 0;
  } else {
    return (ratingsSum/numOfRatings);
  }
}

function OutfitCard (props) {
  let rating = getRating(props.product.rating);

  return (
    <article className='card' data-testid='outfitCard'>
      <span className='upperleft'><label>&#935;<input type='radio' className='radio' onClick={(event) => {props.removeFromOutfit(props.product)}}></input></label></span>
      <img src={props.product.thumbnail_url} className='pictureThumbnail' alt='No Image Available'></img><br></br>
      <div className='cardInfo'>
        <small>{props.product.category}</small>
        <h4>{props.product.name}</h4>
        <span>{props.product.default_price}</span><br></br>
        {rating !== 0 ? <label className='relatedOutfitLabel'>Rating: <span className='rating'>{rating}</span></label> : null}
      </div>
    </article>
  )
}

export default OutfitCard;