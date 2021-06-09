const axios = require('axios');

module.exports.getAllQuestions = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.data.results)
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports.getAllAnswers = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
    })
}

