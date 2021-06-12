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
  const ratingStyle = {width: (rating / 5 * 100)};
  const onSale = {color: 'red'};
  const oldPrice = {textDecorationLine: 'line-through'};

  return (
    <article className='card' data-testid='relatedCard'>
      <span className='upperleft'><label>&#9733;<input type='radio' className='radio' onClick={(event) => {props.open(props.product)}}></input></label></span>
      <img src={props.product.productPhotos[1].thumbnail_url} className='pictureThumbnail' alt='No Image Available'></img><br></br>
      <div className='cardInfo'>
        <small>{props.product.productDetails[2]}</small>
        <h4>{props.product.productDetails[1]}</h4>
        {props.product.productPhotos[0] !== null ? <div><span className='salePrice' style={onSale}>{props.product.productPhotos[0]}</span><br></br><span className='price' style={oldPrice}>{props.product.productDetails[3]}</span></div> : <span className='price'>{props.product.productDetails[3]}</span>}
        <div className="cardRating">
          <div className="cardRating-top" style={ratingStyle}><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
          <div className="cardRating-bottom"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
        </div>
      </div>
    </article>
  )
}

export default RelatedCard;