const axios = require('axios');
import React from 'react';
import {render, screen} from '@testing-library/react';
import RatingsAndReviews from '../client/src/modules/ratingsAndReviews/ratingsAndReviews.jsx';
import Review from '../client/src/modules/ratingsAndReviews/review.jsx';
import NewReviewForm from '../client/src/modules/ratingsAndReviews/newReviewForm.jsx';
import ProductAverages from '../client/src/modules/ratingsAndReviews/productAverages.jsx';



describe('Ratings and reviews', () => {
  test('renders product averages', () => {
    const {container} = render(<RatingsAndReviews itemId={25167}/>);
    expect(container.contains(screen.getByText('product averages'))).toBe(true);
  });
  test('renders a review successfully', () => {
    const review406630 = {
      body: "Blend in to your crowd",
      date: "2021-06-07T00:00:00.000Z",
      helpfulness: 0,
      photos: [],
      rating: 5,
      recommend: true,
      response: null,
      review_id: 406630,
      reviewer_name: "test post",
      summary: "Camo Onesie"
    }
    const {container} = render(<Review currentReview={review406630}/>);
    expect(container.contains(screen.getByText('Camo Onsie', {exact: false}))).toBe(true);
  });
  test('modal window functions correctly', () => {
    const {container} = render(<NewReviewForm/>);
    expect(container.contains(screen.getByText('Do you recommend this product?'))).toBe(true);
  });
});

describe('newReviewForm', () => {
  test('Submit review', () => {
    const {container} = render(<NewReviewForm/>)
    expect(container.contains(screen.getByText('Submit review'))).toBe(true);
  })
});

describe('ProductAverages', () => {
  test('renders static data', () => {
    const {container} = render(<ProductAverages/>)
    expect(container.contains(screen.getByText('product averages'))).toBe(true);

  })
});

describe('Review', () => {
  test('renders data for an individual review', () => {
    const review = {
      "review_id": 348639,
      "rating": 4,
      "summary": "This product was ok!",
      "recommend": false,
      "response": "",
      "body": "I really did not like this product solely because I am tiny and do not fit into it.",
      "date": "2019-01-11T00:00:00.000Z",
      "reviewer_name": "mymainstreammother",
      "helpfulness": 2,
      "photos": []
    }
    const {container} = render(<Review key={'test123'} currentReview={review} review_id={'test123'}/>)
    // console.error(container);
    expect(container.contains(screen.getByText('This product was ok!'))).toBe(true);

  })
});

describe('test API connection', function() {
  test('should respond to a GET request for a specific review', function () {
    axios({
      url: "http://localhost:3001/reviews",
      data: {id: 25167}
    })
      .then((response) => {
        expect(JSON.stringify(response.data)).toBe(
          JSON.stringify({
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
          })
        );
      })
      .catch(console.error)
  });
});