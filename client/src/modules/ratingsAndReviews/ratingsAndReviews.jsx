import React from 'react';
import ProductAverages from './productAverages.jsx';
import ReviewList from './reviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="RatingsAndReviews">
        <ProductAverages/>
        <ReviewList/>
      </div>
    )
  }
}

export default RatingsAndReviews;