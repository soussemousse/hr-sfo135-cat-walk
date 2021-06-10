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
/*
{
  "product": "25167",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 406630,
          "rating": 5,
          "summary": "Camo Onesie",
          "recommend": true,
          "response": null,
          "body": "Blend in to your crowd",
          "date": "2021-06-07T00:00:00.000Z",
          "reviewer_name": "test post",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 406629,
          "rating": 3,
          "summary": "Camo Onesie",
          "recommend": true,
          "response": null,
          "body": "Blend in to your crowd",
          "date": "2021-06-07T00:00:00.000Z",
          "reviewer_name": "Jackets",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 406628,
          "rating": 3,
          "summary": "Camo Onesie",
          "recommend": true,
          "response": null,
          "body": "Blend in to your crowd",
          "date": "2021-06-07T00:00:00.000Z",
          "reviewer_name": "Jackets",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 406627,
          "rating": 5,
          "summary": "Camo Onesie",
          "recommend": true,
          "response": null,
          "body": "Blend in to your crowd",
          "date": "2021-06-07T00:00:00.000Z",
          "reviewer_name": "Jackets",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 406626,
          "rating": 5,
          "summary": "Camo Onesie",
          "recommend": true,
          "response": null,
          "body": "Blend in to your crowd",
          "date": "2021-06-07T00:00:00.000Z",
          "reviewer_name": "Jackets",
          "helpfulness": 0,
          "photos": []
      }
  ]
}
*/