import React from 'react';
import style from './RelatedCSS/Cards.module.css';
import btnStyle from './RelatedCSS/Buttons.module.css';

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

const actionButton = (list, product, callback) => {
  if (list === 'related') {
    return (
      <label>&#9733;
        <input
            type='radio'
            id='actionButton'
            data-testid='actionButton'
            className={btnStyle.radio}
            onClick={(event) => {callback(product)}}
        ></input>
      </label>
    )
  } else {
    return (
      <label>&#935;
        <input
            type='radio'
            id='actionButton'
            data-testid='actionButton'
            className={btnStyle.radio}
            onClick={(event) => {callback(product)}}
          ></input>
      </label>
    )
  }
}

function ProductCard (props) {
  let rating = getRating(props.product.ratings);
  const ratingStyle = {width: (rating / 5 * 100)};
  const onSale = {color: 'red'};
  const oldPrice = {textDecorationLine: 'line-through'};

  return (
    <article className={style.card} data-testid='ProductCard'>
      <span className={btnStyle.upperleft}>
      {actionButton(props.list, props.product, props.actionButton)}
      </span>
      <div
        className='clickableCard'
        onClick={(event) => {props.cardClick(props.product)}}
        data-testid='clickedCard'
      >
        <img
          src={props.product.productPhotos[1].thumbnail_url}
          className={style.pictureThumbnail}
          alt='No Image Available'
        ></img>
        <br></br>
        <div className={style.cardInfo}>
          <small data-testid='category'>{props.product.productDetails[2]}</small>
          <h4 data-testid='productName'>{props.product.productDetails[1]}</h4>
          {props.product.productPhotos[0] !== null
          ? <div>
              <span className={style.salePrice} style={onSale}>{props.product.productPhotos[0]}</span>
              <br></br>
              <span className={style.price} style={oldPrice}>{props.product.productDetails[3]}</span>
            </div>
          : <span className={style.price}>{props.product.productDetails[3]}</span>}
          <div className={style.cardRating} data-testid='rating'>
            <div className={style.cardRatingTop} style={ratingStyle}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <div className={style.cardRatingBottom}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard;