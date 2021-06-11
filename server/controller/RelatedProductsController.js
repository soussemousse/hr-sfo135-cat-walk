const relatedProductsModel = require('../model/RelatedProductsModel.js');
const tokenObj = require('../../token.js')

const relatedListController = (id, res) => {
  const relatedOption = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  relatedProductsModel.relatedProductsModel(relatedOption, res);
}

const relatedProductsController = (id) => {
  const productsOption = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  return relatedProductsModel.productInfo(productsOption);
}

const relatedPhotosController = (id) => {
  const picturesOption = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  return relatedProductsModel.photos(picturesOption);
}

const relatedRatingsController = (id) => {
  const ratingsOption = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  return relatedProductsModel.ratings(ratingsOption)
}

module.exports.relatedProductsController = relatedProductsController;
module.exports.relatedPhotosController = relatedPhotosController;
module.exports.relatedRatingsController = relatedRatingsController;

module.exports.relatedListController = relatedListController;