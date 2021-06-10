const axios = require('axios');
const tokenObj = require('../../token.js');

const relatedProductsModel = (options, res) => {
  axios(options)
    .then((response) => {
      const ids = response.data;
      const products = ids.map((product) => {
        return axios({
          "method": 'get',
          "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product}`,
          "headers": {
            "user-agent": 'request',
            "Authorization": tokenObj.token
          }
        })
          .then(response => {
            return response.data;
          })
          .catch((err) => console.log(err));
      });

      Promise.all(products)
        .then(response => {
          res.send(response);
        });
    })
    .catch((err) => {
      console.log(err);
    })

}

module.exports.relatedProductsModel = relatedProductsModel;