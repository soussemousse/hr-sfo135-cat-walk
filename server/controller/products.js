
const productDetailOverview = function (id, res) {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }
}


module.exports.productDetailOverview = productDetailOverview;