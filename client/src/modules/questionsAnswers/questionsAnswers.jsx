import React from 'react';
import QuestionsList from './QuestionsList.jsx';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    };
  }

  render() {
    return (
      <div className="QuestionsAndAnswers">
        <input id="questions-search" type="text" placeholder="Search..."></input>
        <QuestionsList />
      </div>
    )
  }
}

export default QuestionsAndAnswers;