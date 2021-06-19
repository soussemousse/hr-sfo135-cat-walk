const ratingsModel = require('../model/ratingsAndReviews.js');
require('dotenv').config();

const ratingsAndReviews = function (id, res) {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=${id}&count=${1000}`,
    headers: {
      "user-agent": 'request',
      Authorization: process.env.token
    }
  }
  ratingsModel.reviewsAxios(options, res);
}

const ratingsAndReviewsMeta = function (id, res) {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${id}&count=${1000}`,
    headers: {
      "user-agent": 'request',
      Authorization: process.env.token
    }
  }
  ratingsModel.reviewsAxios(options, res);
}

const postNewReview = function (reqBody, res) {
  const options = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews`,
    data: reqBody,
    headers: {
      "user-agent": 'request',
      Authorization: process.env.token
    },
  }
  ratingsModel.reviewsAxios(options, res);
}

module.exports.postNewReview = postNewReview;
module.exports.ratingsAndReviewsMeta = ratingsAndReviewsMeta;
module.exports.ratingsAndReviews = ratingsAndReviews;