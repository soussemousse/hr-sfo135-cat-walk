import React from 'react';
import ProductAverages from './productAverages.jsx';
import ReviewList from './reviewList.jsx';
import axios from 'axios';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productReviews: undefined
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/reviews/${this.props.itemId}`)
    .then((response) => {
      this.setState({productReviews: response.data.results})
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="RatingsAndReviews">
        <ProductAverages/>
        <ReviewList productReviews={this.state.productReviews}/>
      </div>
    )
  }
}

export default RatingsAndReviews;