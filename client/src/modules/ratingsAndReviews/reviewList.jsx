import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render () {
    if (this.props.list.productReviews) {
      const max = this.props.list.reviewsToRender;
      const list = this.props.list.productReviews.slice(0, max);
      return (
        <div>
          <div className="reviewList">
            {list.map((review) => {
              return <Review key={review.review_id} currentReview={review}/>
            })}
          </div>
          <button onClick={this.props.pressButton}>more reviews</button>
          <div className="addReview">
            <button>add review</button>
          </div>
        </div>
       )
    } else {
      return (
        <div>loading..</div>
      )
    }
  }
}

export default ReviewList;