import React from 'react';
//import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import axios from 'axios';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedAnswers: null,
      question_id: this.props.QA.question_id,
      question_body: this.props.QA.question_body,
    };
    this.getAnswers = this.getAnswers.bind(this);
  }

  getAnswers(question_id) {
    const option = {
      'method': 'GET',
      'url': `/qa/questions/${question_id}/answers`
    }

    axios(option)
      .then(response => {
        response.data.sort((a, b) => {
          if (a.helpulness === b.helpfulness) {
            return 0;
          } else {
            return (a.helpfulness < b.helpfulness) ? 1 : -1;
          }
        });
        this.setState({
          sortedAnswers: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getAnswers(this.state.question_id);
  }

  render() {
    return (this.state.sortedAnswers !== null) ? (
      <div className="question-item">
        <h4>{`Q: ${this.state.question_body}`}</h4>
        <AnswersList answers={this.state.sortedAnswers}/>
      </div>
    ) : (<div></div>)
  }
}

export default QuestionItem;