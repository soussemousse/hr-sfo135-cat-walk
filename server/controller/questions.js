const questionsModel = require('../model/questionsAndAnswers.js');
const tokenObj = require('../../token.js');

module.exports.getAllQuestions = (id, page, count, res) => {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}&page=${page}&count=${count}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.getAllQuestions(options, res);
}

module.exports.getAllAnswers = (question_id, res) => {
  const options = {
    "method": "get",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/answers`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.getAllQuestions(options, res);
}