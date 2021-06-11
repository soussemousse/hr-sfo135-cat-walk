import React from 'react';
import Review from './review.jsx';
import ReviewFormModal from './reviewFormModal.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openPortal: false,
      reviewData: {
      }
    };
    this.closePortal = this.closePortal.bind(this);
  }

  closePortal() {
    this.setState({openPortal: false});
  }

  render() {
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
          <button onClick={() => {this.setState({openPortal: true})}}>add review</button>
          {this.state.openPortal ? <ReviewFormModal this={this} closePortal={this.closePortal}/> : null}
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