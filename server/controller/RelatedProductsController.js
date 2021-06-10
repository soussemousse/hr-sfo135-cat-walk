const relatedProductsModel = require('../model/RelatedProductsModel.js');
const tokenObj = require('../../token.js')

const relatedProductsController = (id, res) => {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  relatedProductsModel.relatedProductsModel(options, res);
}


module.exports.relatedProductsController = relatedProductsController;