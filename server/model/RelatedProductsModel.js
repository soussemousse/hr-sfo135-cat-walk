const axios = require('axios');

const relatedProductsModel = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
}

const productInfo = (options) => {
  return axios(options)
    .then((response) => {
      const productDetails = [response.data.id, response.data.name, response.data.category, response.data.default_price, response.data.features]
      return productDetails;
    })
    .catch((err) => {
      console.log(err);
    })
}

const photos = (options) => {
  return axios(options)
    .then((response) => {
      const resArr = [response.data.results[0].sale_price, response.data.results[0].photos[0]];

      return resArr;
    })
    .catch((err) => {
      console.log(err);
    })
}

const ratings = (options) => {
  return axios(options)
    .then((response) => {
      return response.data.ratings;
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports.productInfo = productInfo;
module.exports.photos = photos;
module.exports.ratings = ratings;
module.exports.relatedProductsModel = relatedProductsModel;