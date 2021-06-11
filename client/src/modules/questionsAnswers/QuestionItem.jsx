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
      question_helpfulness: this.props.QA.question_helpfulness
    };
    this.getAnswers = this.getAnswers.bind(this);
  }

  getAnswers() {
    const option = {
      'method': 'GET',
      'url': `/qa/questions/${this.state.question_id}/answers`
    }

    axios(option)
      .then(response => {
        // response.data.sort((a, b) => {
        //   if (a.helpulness === b.helpfulness) {
        //     return 0;
        //   } else {
        //     return (a.helpfulness < b.helpfulness) ? 1 : -1;
        //   }
        // });
        this.setState({
          sortedAnswers: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getAnswers();
  }

  render() {
    return (this.state.sortedAnswers !== null) ? (
      <article className="question-item">
        <h4>{`Q: ${this.state.question_body}`}</h4>

        <div className="question-info">
          <h6 className="question-helpful">{`Helpful? `}<u>Yes</u>{` (${this.state.question_helpfulness})`}</h6>
          <h6 className="answer-add"><u>Add Answer</u></h6>
        </div>

        <AnswersList answers={this.state.sortedAnswers}/>
      </article>
    ) : (<div></div>)
  }
}

export default QuestionItem;