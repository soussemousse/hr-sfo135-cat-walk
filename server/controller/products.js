const productModel = require('../model/productDetailOverview.js');
require('dotenv').config();

const productDetailOverview = function (id, res) {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": process.env.token
    }
  }

  productModel.productAxios(options, res);
}

module.exports.productDetailOverview = productDetailOverview;