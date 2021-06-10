const relatedProductsModel = require('../model/RelatedProductsModel.js');
const token = require('../../token.js')

const relatedProductsController = (id, res) => {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`,
    "headers": {
      "user-agent": 'request',
      "Authorization": token.token
    }
  }

  relatedProductsModel.relatedProductsModel(options, res);
}


module.exports.relatedProductsController = relatedProductsController;