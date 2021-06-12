import React from 'react';
import AnswersList from './AnswersList.jsx';
import axios from 'axios';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question_id: this.props.QA.question_id,
      question_body: this.props.QA.question_body,
      helpfulness: this.props.QA.question_helpfulness,
      wasHelpful: false
      // wasReported: false
    };
    this.handleQuestionHelpfulButton = this.handleQuestionHelpfulButton.bind(this);
    // this.handleQuestionReportButton = this.handleQuestionReportButton.bind(this);
  }

  handleQuestionHelpfulButton() {
    if (!this.state.wasHelpful) {
      this.axiosHelpful();
    }
  }

  // no report question button yet
  // handleQuestionReportButton() {
  //   if (!this.state.wasReported) {
  //     this.axiosReport();
  //   }
  // }

  axiosHelpful() {
    const option = {
      'method': 'PUT',
      'url': `/qa/questions/${this.state.question_id}/helpful`
    }
    axios(option)
    .then(response => {
      this.setState({
        helpfulness: this.state.helpfulness + 1,
        wasHelpful: true
      })
    })
    .catch(err => {console.log(err);})
  }

  // axiosReport() {
  //   const option = {
  //     'method': 'PUT',
  //     'url': `/qa/questions/${this.state.question_id}/report`
  //   }
  //   axios(option)
  //   .then(response => {
  //     this.setState({
  //       wasReported: true
  //     })
  //   })
  //   .catch(err => {console.log(err);})
  // }

  render() {
    return (
    // (this.state.sortedAnswers !== null) ? (
      <article className="question-item">
        {/* <div><strong>{`Q: ${this.state.question_body}`}</strong></div> */}

        <div className="question-info">
          <h4 className="question-text"><strong>{`Q: ${this.state.question_body}`}</strong></h4>

          <div className="question-item-buttons">
            <h6 className="question-helpful">{`Helpful? `}<button className="question-helpful-button" onClick={this.handleQuestionHelpfulButton}><u>Yes</u></button>{` (${this.state.helpfulness})`}</h6>

            <button className="answer-add-button"><u>Add Answer</u></button>
          </div>

        </div>

        <AnswersList question_id={this.state.question_id}/>
      </article>
    // ) : (<div></div>)
    )
  }
}

export default QuestionItem;