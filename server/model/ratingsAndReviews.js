const axios = require('axios');

const reviewsAxios = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
    })
};

// const postAxios = (options, res) => {
//   axios.post(options)
//     .then((response) => {
//       res.send(response.data)
//     })
//     .catch((err) => {
//       res.send(err);
//     })
// };

module.exports.reviewsAxios = reviewsAxios;
// module.exports.postAxios = postAxios;