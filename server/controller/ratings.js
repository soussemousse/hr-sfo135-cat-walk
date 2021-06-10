const ratingsModel = require('../model/ratingsAndReviews.js');
const tokenObj = require('../../token.js');

const ratingsAndReviews = function (id, res) {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=${id}&page`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }
  ratingsModel.reviewsAxios(options, res);
}

module.exports.ratingsAndReviews = ratingsAndReviews;