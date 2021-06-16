import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const id = this.props.review_id;
    const review = this.props.currentReview;
    const user = review.reviewer_name ? review.reviewer_name : 'Anonymous';
    const star = (code, key) => (<div key={key} className="reviewStar">{String.raw`${code}`}</div>);
    let starRating = new Array(5).fill('').map((empty, index) => {
      if (index < review.rating) {
        return <div key={id + index} className="reviewStar">&#9733;</div>;
        // return star('&#9733;', id + index);
      }
      return <div key={id + index} className="reviewStar">&#9734;</div>;
      // return star('&#9734;', id + index);
    })
    console.log(starRating);
    return (
      <div className="review">
        <div className="reviewRating">{starRating}</div>
        <div className="reviewUsername">{user}</div>
        <div className="reviewDate">{review.date}</div>
        <div className="reviewSummary">{review.summary}</div>
        <p className="reviewBody">{review.body}</p>
        {review.recommend ? <div className="reviewRecommend"><div className="reviewRecommendCheckMark">&#10003;</div> I recommend this product</div> : null}
        {/* {review.recommend ? <div className="reviewRecommend">I recommend this review</div> : null} */}
        {review.response ? <div className="reviewResponse">{'sales response: ' + review.response}</div> : null}
      </div>
    )
  }
}

export default Review;