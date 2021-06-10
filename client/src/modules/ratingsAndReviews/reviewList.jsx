import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.mapReviews = this.mapReviews.bind(this);
  }



  //render the review list starting with the first two reviews based off of the sort method
  mapReviews () {
  }

  render () {
    console.log(this.props.productReviews);
    if (this.props.productReviews) {
     return (
       <div className="reviewList">
         {this.props.productReviews.map((review) => {
           return <Review key={review.review_id} currentReview={review}/>
         })}
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