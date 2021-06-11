import React from 'react';
import Answer from './Answer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedAnswers: this.props.answers,
      count: 2
    }
    this.handleLoadAnswersClick = this.handleLoadAnswersClick.bind(this);
  }

  handleLoadAnswersClick() {
    if (this.state.count < this.state.sortedAnswers.length) {
      this.setState({
        count: this.state.sortedAnswers.length
      })
    }

  }

  render() {
    return (
      <div className="answers-list">
        <div><strong>A: </strong></div>

        <div className="answers-box">
          {this.state.sortedAnswers.slice(0, this.state.count).map((answer, index) => {
            return <Answer answer={answer} key={index}/>
          })}

          {(this.state.sortedAnswers.length > this.state.count) ? (<button className="answers-load-button" onClick={this.handleLoadAnswersClick}>LOAD MORE ANSWERS</button>) : <div></div> }

        </div>

      </div>
    )
  }
}

export default AnswersList;