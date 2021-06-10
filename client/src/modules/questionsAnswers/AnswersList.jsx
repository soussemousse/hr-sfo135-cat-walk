import React from 'react';
import Answer from './Answer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: this.props.answers
    }
  }

  render() {
    var answerKeys = Object.keys(this.state.answers);

    return (
      <div className="answers-box">
        <div><strong>A: </strong></div>
        <div className="answers-list">
          <Answer answer={this.state.answers[answerKeys[0]]}/>
          <Answer answer={this.state.answers[answerKeys[1]]}/>

        </div>
      </div>
    )
  }
}

export default AnswersList;