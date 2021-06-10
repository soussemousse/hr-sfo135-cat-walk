import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }



  //render the review list starting with the first two reviews based off of the sort method
  render () {
    return (
      <div className="reviewList">
        <Review/>
      </div>
    )
  }
}

export default ReviewList;