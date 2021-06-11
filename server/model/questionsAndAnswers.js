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
      res.send(response.data.results)
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports.markHelpfulQuestion = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports.reportQuestion = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports.markHelpfulAnswer = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.status)
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports.reportAnswer = (options, res) => {
  axios(options)
    .then((response) => {
      res.send(response.status)
    })
    .catch((err) => {
      res.send(err);
    })
}

