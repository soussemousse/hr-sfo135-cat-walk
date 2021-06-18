import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const review = this.props.currentReview;
    return (
      <div className="review">
        <div className="reviewRating">{review.rating + ' stars'}</div>
        <div className="reviewDate">{review.date}</div>
        <div className="reviewSummary">{review.summary}</div>
        <div className="reviewBody">{review.body}</div>
        <div className="reviewRecommend">{'recommended: ' + review.recommend}</div>
        <div className="reviewUsername">{'username: ' + review.username + ' (should include verified purchaser)'}</div>
        <div className="reviewResponse">{'sales response: ' + review.response}</div>
      </div>
    )
  }
}
//  test commit
export default Review;