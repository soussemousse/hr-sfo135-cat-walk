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

function RelatedCard (props) {
  let rating = getRating(props.product.ratings);

  return (
    <article className='card' data-testid='relatedCard'>
      <span className='upperleft'><label>&#9733;<input type='radio' className='radio' onClick={(event) => {props.open(props.product)}}></input></label></span>
      <img src={props.product.productPhotos[1].thumbnail_url} className='pictureThumbnail' alt='No Image Available'></img><br></br>
      <div className='cardInfo'>
        <small>{props.product.productDetails[2]}</small>
        <h4>{props.product.productDetails[1]}</h4>
        <span>{props.product.productDetails[3]}</span><br></br>
        {rating !== 0 ? <label className='relatedRatingLabel'>Rating: <span className='rating'>{rating}</span></label> : null}
      </div>
    </article>
  )
}

export default RelatedCard;