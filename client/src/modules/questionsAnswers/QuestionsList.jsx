import React from 'react';
import QuestionItem from './QuestionItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 2,
      sortedQuestions: this.props.questions
    };

    this.handleLoadQuestionsClick = this.handleLoadQuestionsClick.bind(this);

    this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);
  }

  handleLoadQuestionsClick() {
    if (this.state.count < this.state.sortedQuestions.length) {
      this.setState({
        count: this.state.count + 2
      })
    }
  }

  handleAddQuestionClick() {

  }

  render() {
    return (
      <>
        <div className="questions-list">
          {this.state.sortedQuestions.slice(0, this.state.count).map((question, index) => {
            return <QuestionItem QA={question} key={index}/>
          })}
        </div>

        <div className="question-buttons">
          {(this.state.sortedQuestions.length > this.state.count) ? <button id="questions-load-button" onClick={this.handleLoadQuestionsClick}> MORE ANSWERED QUESTIONS </button> : <></>}

          <button id="questions-add-button" onClick={this.handleAddQuestionClick}> ADD A QUESTION + </button>
        </div>

      </>
    )
  }
}

export default QuestionsList;