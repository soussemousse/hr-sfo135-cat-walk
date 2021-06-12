import React from 'react';
import ProductAverages from './productAverages.jsx';
import ReviewList from './reviewList.jsx';
import axios from 'axios';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productReviews: undefined,
      reviewsToRender: 0,
      characteristics: {}
    };
    this.showMoreReviewsButtonPressed = this.showMoreReviewsButtonPressed.bind(this);
  }

  componentDidMount() {
    // axios.get(`http://localhost:3001/reviews/${this.props.product_id}`)
    // .then((response) => {
    //   this.setState({productReviews: response.data.results})
    //   // console.log('promise in component did mount')
    //   // console.log(response);
    //   if (response.data.results.length > 1) {
    //     this.setState({reviewsToRender: 2})
    //   } else {
    //     this.setState({displayedReviews: response.data.results.length})
    //   }
    // })
    // .catch(console.error)

    axios.get(`http://localhost:3001/reviews/meta/${this.props.product_id}`)
    .then((response) => {
      this.setState({characteristics: response.data.characteristics})

      axios.get(`http://localhost:3001/reviews/${this.props.product_id}`)
      .then((response) => {
        this.setState({productReviews: response.data.results})
        if (response.data.results.length > 1) {
          this.setState({reviewsToRender: 2})
        } else {
          this.setState({reviewToRender: response.data.results.length})
        }
      })
      .catch(console.error)

    })
    .catch(console.error)
  }

  showMoreReviewsButtonPressed() {
    this.setState({reviewsToRender: this.state.reviewsToRender + 2})
  }

  render() {
    if (this.state.productReviews) {
      return (
        <div className="RatingsAndReviews">
          <ProductAverages/>
          <ReviewList list={this.state} product_id={this.props.product_id} pressButton={this.showMoreReviewsButtonPressed}/>
        </div>
      )
    } else {
      return <div>loading..</div>
    }
  }
}

export default RatingsAndReviews;