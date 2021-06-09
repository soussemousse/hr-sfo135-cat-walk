const axios = require('axios');

const productAxios = function (options, res) {
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
      res.end();
    })
}

module.exports.productAxios = productAxios;
