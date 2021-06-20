import React from 'react';
import style from './relatedCSS/review.module.css';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  displayDate() {
    const reviewDate = new Date(this.props.currentReview.date);
    const localDate = reviewDate.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
    return (<div className={style.reviewDate}>{localDate}</div>);
  }

  render() {
    const id = this.props.review_id;
    const review = this.props.currentReview;
    const user = review.reviewer_name ? review.reviewer_name : 'Anonymous';
    let starRating = new Array(5).fill('').map((empty, index) => {
      return index < review.rating ? <div key={id + index} className={style.reviewStar}>&#9733;</div> : <div key={id + index} className={style.reviewStar}>&#9734;</div>;
    })
    return (
      <div className={style.review}>
        <div className={style.reviewRating}>{starRating}</div>
        <div className={style.reviewUsername}>{user}</div>
        {this.displayDate()}
        <div className={style.reviewSummary}>{review.summary}</div>
        <p className={style.reviewBody}>{review.body}</p>
        {review.recommend ? <div className={style.reviewRecommend}><div className={style.reviewRecommendCheckMark}>&#10003;</div> I recommend this product</div> : null}
        {review.response ? <div className={style.reviewResponse}>{'sales response: ' + review.response}</div> : null}
      </div>
    )
  }
}
//<div className={style.reviewUserCheckmark}>&#9989;</div>{' '}
export default Review;