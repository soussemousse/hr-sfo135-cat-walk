import React from 'react';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answer_id: this.props.answer.answer_id,
      isSeller: (this.props.answer.answerer_name === 'Seller'),
      username: this.props.answer.answerer_name,
      helpfulness: this.props.answer.helpfulness,
      wasHelpful: false,
      wasReported: false
    }
    this.handleAnswerHelpfulButton = this.handleAnswerHelpfulButton.bind(this);
    this.handleAnswerReportButton = this.handleAnswerReportButton.bind(this);
  }

  getFormattedDate() {
    var date = new Date(this.props.answer.date);

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    return `${month} ${day}, ${year}`;

  }

  handleAnswerHelpfulButton() {
    if (!this.state.wasHelpful) {
      this.axiosHelpful();
    }
  }

  handleAnswerReportButton() {
    if (!this.state.wasReported) {
      this.axiosReport();
    }
  }

  axiosHelpful() {
    const option = {
      'method': 'PUT',
      'url': `/qa/answers/${this.state.answer_id}/helpful`
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

  axiosReport() {
    const option = {
      'method': 'PUT',
      'url': `/qa/answers/${this.state.answer_id}/report`
    }
    axios(option)
    .then(response => {
      this.setState({
        wasReported: true
      })
    })
    .catch(err => {console.log(err);})
  }

  render() {
    var username = (this.state.isSeller) ? <b>Seller</b> : <>{this.state.username}</>;
    return (
      <div className="answer">
        <div className="answer-text">{this.props.answer.body}</div>

        {/* <div className="answer-pics"></div> */}

        <div className="answer-info">
            <div className="answer-user">{`by `}{username}{`, ${this.getFormattedDate()}`}</div>

            <div className="answer-helpful">{`Helpful? `}<button className="answer-helpful-button" onClick={this.handleAnswerHelpfulButton}><u>Yes</u></button>{` (${this.state.helpfulness})`}</div>

            <button className="answer-report-button" onClick={this.handleAnswerReportButton}><u>{(this.state.wasReported) ? 'Reported' : 'Report'}</u></button>

        </div>
      </div>
    )
  }
}

export default Answer;