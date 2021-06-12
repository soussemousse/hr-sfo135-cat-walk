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

module.exports.getAllAnswers = (question_id, page, count , res) => {
  const options = {
    "method": "get",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/answers?page=${page}&count=${count}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.getAllAnswers(options, res);
}

module.exports.markHelpfulQuestion = (question_id, res) => {
  const options = {
    "method": "put",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/helpful`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.markHelpfulQuestion(options, res);
}

module.exports.reportQuestion = (question_id, res) => {
  const options = {
    "method": "put",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/report`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.reportQuestion(options, res);
}

module.exports.markHelpfulAnswer = (answer_id, res) => {
  const options = {
    "method": "put",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${answer_id}/helpful`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.markHelpfulAnswer(options, res);
}

module.exports.reportAnswer = (answer_id, res) => {
  const options = {
    "method": "put",
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${answer_id}/report`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }

  questionsModel.reportAnswer(options, res);
}