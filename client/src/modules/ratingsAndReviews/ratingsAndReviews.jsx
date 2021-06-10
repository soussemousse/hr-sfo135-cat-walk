import React from 'react';
import ProductAverages from './productAverages.jsx';
import ReviewList from './reviewList.jsx';
import axios from 'axios';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productReviews: undefined,
      reviewsToRender: 0
    };
    this.showMoreReviewsButtonPressed = this.showMoreReviewsButtonPressed.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/reviews/${this.props.itemId}`)
    .then((response) => {
      this.setState({productReviews: response.data.results})
      if (response.data.results.length > 1) {
        this.setState({reviewsToRender: 2})
      } else {
        this.setState({displayedReviews: response.data.results.length})
      }
    })
    .catch(console.error)
  }

  showMoreReviewsButtonPressed() {
    this.setState({reviewsToRender: this.state.reviewsToRender + 2})
  }

  render() {
    return (
      <div className="RatingsAndReviews">
        <ProductAverages/>
        <ReviewList list={this.state} pressButton={this.showMoreReviewsButtonPressed}/>
      </div>
    )
  }
}

export default RatingsAndReviews;