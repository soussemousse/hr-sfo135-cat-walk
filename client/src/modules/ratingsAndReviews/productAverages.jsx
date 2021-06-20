import React from 'react';
import style from './relatedCSS/productAverages.modules.css';

class ProductAverages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render () {
    if (this.props.list.productReviews) {
      const ratingsArray = this.props.list.productReviews.map(review => review.rating);
      const averageRating = ratingsArray.map((rating) => Number.parseInt(rating)).reduce((total, next) => total + next) / ratingsArray.length;
      return (
        <div className={style.averages}>
          <div className={style.averageRating}>{averageRating.toString().substring(0, 3)}</div>
        </div>
      )
    }
  }
}

export default ProductAverages;