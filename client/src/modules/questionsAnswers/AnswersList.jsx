import React from 'react';
import Answer from './Answer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedAnswers: this.props.answers
    }
  }

  render() {
    return (
      <div className="answers-box">
        <div><strong>A: </strong></div>
        <div className="answers-list">
          {this.state.sortedAnswers.slice(0, 2).map((answer, index) => {
            return <Answer answer={answer} key={index}/>
          })}
        </div>
      </div>
    )
  }
}

export default AnswersList;