import React from 'react';
//import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    };
  }

  render() {
    return (
      <div className="question-item">
        <h4>{`Q: ${this.props.QA.question_body}`}</h4>
        <AnswersList answers={this.props.QA.answers}/>
      </div>
    )
  }
}

export default QuestionItem;