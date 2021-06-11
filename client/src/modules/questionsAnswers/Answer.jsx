import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: this.props.answer,
      isSeller: (this.props.answer.answerer_name === 'Seller'),
      username: this.props.answer.answerer_name
    }

  }

  getFormattedDate() {
    var date = new Date(this.state.answer.date);

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    return `${month} ${day}, ${year}`;

  }

  render() {
    var username = (this.state.isSeller) ? <b>Seller</b> : <>{this.state.username}</>;
    return (
      <div className="answer">
        <div className="answer-text">{this.state.answer.body}</div>

        {/* <div className="answer-pics"></div> */}

        <div className="answer-info">
            <div className="answer-user">{`by `}{username}{`, ${this.getFormattedDate()}`}</div>

            <div className="answer-helpful">{`Helpful? `}<u>Yes</u>{` (${this.state.answer.helpfulness})`}</div>

            <div className="answer-report"><u>Report</u></div>

        </div>
      </div>
    )
  }
}

export default Answer;